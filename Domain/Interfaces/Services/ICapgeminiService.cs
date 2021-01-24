using Domain.Models;
using Domain.Models.Dtos;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Threading;

namespace Domain.Interfaces.Services
{
    public interface ICapgeminiService
    {
        Retorno<List<ErroValidacao>> Importar(IFormFile formFile, CancellationToken cancellationToken);
        List<DtoImportacao> GetImportacoes();
        DtoImportacao GetImportacoes(Guid id);
    }
}
