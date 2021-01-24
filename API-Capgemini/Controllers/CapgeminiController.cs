using Domain.Interfaces.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading;

namespace API_Capgemini.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CapgeminiController : ControllerBase
    {
        private readonly ICapgeminiService _service;
        public CapgeminiController(ICapgeminiService service)
        {
            _service = service;
        }

        [HttpPost]
        public IActionResult Importar(IFormFile formFile, CancellationToken cancellationToken)
        {
            var retorno = _service.Importar(formFile, cancellationToken);

            // Se possuir erros.
            if (retorno != null)
                return BadRequest(retorno);

            return Ok();
        }

        [HttpGet]
        public IActionResult Importacoes() => Ok(_service.GetImportacoes());

        [HttpGet("{id}")]
        public IActionResult Importacoes(Guid id)
        {
            var imports = _service.GetImportacoes(id);

            if (imports != null)
                return Ok(imports);

            return NotFound();
        }
    }
}
