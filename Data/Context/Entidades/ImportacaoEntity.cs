using Domain.Models;
using System;
using System.Collections.Generic;

namespace Data.Context.Entidades
{
    public class ImportacaoEntity
    {
        public Guid Id { get; set; }
        public DateTime DataImportacao { get; set; }
        public List<ArquivoExcel> DadosArquivo { get; set; }
    }
}
