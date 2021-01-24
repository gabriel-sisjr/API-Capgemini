using FluentValidation;
using System;

namespace Domain.Models
{
    public class ProdutoValidator : AbstractValidator<ArquivoExcel>
    {
        public ProdutoValidator()
        {
            RuleFor(x => x.DataEntrega).NotEmpty().WithMessage("Data não pode ser vazia!")
                        .Must(DataMaiorQueHoje).WithMessage("Data Inferior a hoje!");

            RuleFor(x => x.NomeProduto).NotEmpty().Length(1, 50).WithMessage("Descrição com mais de 50 caracteres!");
            RuleFor(x => x.Quantidade).NotEmpty().Must(QtdMaiorQueZero).WithMessage("Quantidade deve ser maior que zero!");

            RuleFor(x => x.ValorUnitario).NotEmpty().Must(VlUniMaiorQueZero).WithMessage("Valor Unitario deve ser maior que zero!");
        }

        private static bool DataMaiorQueHoje(DateTime? dataPlanilha) => dataPlanilha?.Date >= DateTime.Today.Date;
        private static bool QtdMaiorQueZero(int? qtd) => qtd > 0;
        private static bool VlUniMaiorQueZero(decimal? vlUni) => vlUni > 0M;
    }
}
