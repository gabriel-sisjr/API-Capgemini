using AutoMapper;
using Data.Context.Entidades;
using Domain.Interfaces.Repositories;
using Domain.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Data.Repositories
{
    public class CapgeminiRepository : ICapgeminiRepository
    {
        private readonly MongoDbContext _context;
        private readonly IMapper _mapper;
        public CapgeminiRepository(IMapper mapper)
        {
            _context = new MongoDbContext();
            _mapper = mapper;
        }

        public void Add(Importacao dados) => _context.Dados.InsertOne(_mapper.Map<ImportacaoEntity>(dados));
        public List<Importacao> GetImportacoes() => new List<Importacao>(_context.Dados.Find(_ => true).ToList().Select(x => _mapper.Map<Importacao>(x)).ToList());
        public Importacao GetImportacoes(Guid id) => _mapper.Map<Importacao>(_context.Dados.Find(x => x.Id == id).FirstOrDefault());
    }
}
