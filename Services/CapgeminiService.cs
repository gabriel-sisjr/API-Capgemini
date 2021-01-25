using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Models;
using Domain.Models.Dtos;
using Microsoft.AspNetCore.Http;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;

namespace Services
{
    public class CapgeminiService : ICapgeminiService
    {
        private readonly ICapgeminiRepository _repository;
        public CapgeminiService(ICapgeminiRepository repository)
        {
            _repository = repository;
        }

        public Retorno<List<ErroValidacao>> Importar(IFormFile formFile, CancellationToken cancellationToken)
        {
            #region Arquivo invalido ou não enviado
            if (formFile == null || formFile.Length <= 0)
                return Retorno<List<ErroValidacao>>.GetResult("Nenhum Arquivo foi anexado!");

            if (!Path.GetExtension(formFile.FileName).Equals(".xlsx", StringComparison.OrdinalIgnoreCase))
                return Retorno<List<ErroValidacao>>.GetResult("Arquivo Invalido");
            #endregion

            var dados = ObterDadosArquivo(formFile, cancellationToken);

            var erros = ObterErrosArquivo(dados);

            if (erros.Any()) return Retorno<List<ErroValidacao>>.GetResult("Erros encontrados", erros);

            // Inserindo dados.
            _repository.Add(new Importacao { Id = Guid.NewGuid(), DataImportacao = DateTime.Today, DadosArquivo = dados });

            return null;
        }

        public List<DtoImportacao> GetImportacoes() =>
            _repository.GetImportacoes()
                    .Select(x => new DtoImportacao
                    {
                        DataImportacao = x.DataImportacao,
                        IdImportacao = x.Id,
                        Dados = x.DadosArquivo,
                        TotalImportacao = x.DadosArquivo.Sum(s => s.ValorUnitario.Value),
                        QuantidadeItens = x.DadosArquivo.Count(),
                        MenorDataEntrega = x.DadosArquivo.OrderBy(y => y.DataEntrega.Value).Select(y => y.DataEntrega.Value).First()
                    }).ToList();

        public DtoImportacao GetImportacoes(Guid id)
        {
            var x = _repository.GetImportacoes(id);

            if (x != null)
                return new DtoImportacao
                {
                    DataImportacao = x.DataImportacao,
                    IdImportacao = x.Id,
                    Dados = x.DadosArquivo,
                    TotalImportacao = x.DadosArquivo.Sum(s => s.ValorUnitario.Value),
                    QuantidadeItens = x.DadosArquivo.Count(),
                    MenorDataEntrega = x.DadosArquivo.OrderBy(y => y.DataEntrega.Value).Select(y => y.DataEntrega.Value).First()
                };

            return null;
        }

        #region PRIVATE METHODS
        private List<ArquivoExcel> ObterDadosArquivo(IFormFile formFile, CancellationToken cancellationToken)
        {
            var list = new List<ArquivoExcel>();
            using (var stream = new MemoryStream())
            {
                formFile.CopyToAsync(stream, cancellationToken).Wait();

                using (var package = new ExcelPackage(stream))
                {
                    ExcelWorksheet worksheet = package.Workbook.Worksheets[0];
                    var qtdLinhas = worksheet.Dimension.Rows;
                    var qtdColunas = worksheet.Dimension.Columns;

                    for (int linha = 2; linha <= qtdLinhas; linha++)
                        list.Add(new ArquivoExcel
                        {
                            Id = Guid.NewGuid(),
                            DataEntrega = DateTime.Parse(worksheet.Cells[linha, 1].Value.ToString().Trim()),
                            NomeProduto = worksheet.Cells[linha, 2].Value?.ToString().Trim(),
                            Quantidade = int.Parse(worksheet.Cells[linha, 3].Value.ToString().Trim()),
                            ValorUnitario = decimal.Round(decimal.Parse(worksheet.Cells[linha, 4].Value.ToString().Trim()), 2, MidpointRounding.AwayFromZero),
                        });
                }
            }
            return list;
        }

        private List<ErroValidacao> ObterErrosArquivo(IEnumerable<ArquivoExcel> dados)
        {
            var erros = new List<ErroValidacao>();
            var cdLinhaErro = 2;
            dados.ToList().ForEach(d =>
            {
                var validator = new ProdutoValidator().Validate(d);
                if (!validator.IsValid)
                {
                    erros.Add(new ErroValidacao
                    {
                        Linha = cdLinhaErro,
                        Colunas = validator.Errors.Select(x => x.ErrorMessage).ToList()
                    });
                }
                cdLinhaErro++;
            });
            return erros;
        }
        #endregion
    }
}
