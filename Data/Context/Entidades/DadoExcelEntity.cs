using System;

namespace Data.Context.Entidades
{
    public class DadoExcelEntity
    {
        public Guid Id { get; set; }
        public DateTime? DtEntrega { get; set; }
        public string NomeProduto { get; set; }
        public int? Quantidade { get; set; }
        public decimal? ValorUnitario { get; set; }
    }
}
