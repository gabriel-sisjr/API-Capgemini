using System;

namespace Domain.Models
{
    public class ArquivoExcel
    {
        public Guid Id { get; set; }
        public DateTime? DataEntrega { get; set; }
        public string NomeProduto { get; set; }
        public int? Quantidade { get; set; }
        public decimal? ValorUnitario { get; set; }
    }
}
