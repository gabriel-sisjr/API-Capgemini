using System;
using System.Collections.Generic;

namespace Domain.Models
{
    public class Importacao
    {
        public Guid Id { get; set; }
        public DateTime DataImportacao { get; set; }
        public List<ArquivoExcel> DadosArquivo { get; set; }
    }
}
