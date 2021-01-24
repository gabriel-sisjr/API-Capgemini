using System.Collections.Generic;

namespace Domain.Models
{
    public class ErroValidacao
    {
        public int Linha { get; set; }
        public IEnumerable<string> Colunas { get; set; }
    }
}
