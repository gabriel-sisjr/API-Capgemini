using Domain.Models;
using System;
using System.Collections.Generic;

namespace Domain.Interfaces.Repositories
{
    public interface ICapgeminiRepository
    {
        void Add(Importacao dados);
        List<Importacao> GetImportacoes();
        Importacao GetImportacoes(Guid idImportacao);
    }
}
