using System;
using System.Collections.Generic;

namespace Domain.Models.Dtos
{
    public class DtoImportacao
    {
        public Guid IdImportacao { get; set; }
        public DateTime DataImportacao { get; set; }
        public int QuantidadeItens { get; set; }
        public DateTime MenorDataEntrega { get; set; }
        public decimal TotalImportacao { get; set; }
        public List<ArquivoExcel> Dados { get; set; }
    }
}
