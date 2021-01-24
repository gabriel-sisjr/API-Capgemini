using MongoDB.Driver;
using System;

namespace Data.Context.Entidades
{
    public class MongoDbContext
    {
        public static string ConnectionString { get; set; }
        public static string DatabaseName { get; set; }
        public static bool IsSSL { get; set; }

        private IMongoDatabase Database { get; }

        public MongoDbContext()
        {
            try
            {
                var config = MongoClientSettings.FromUrl(new MongoUrl(ConnectionString));
                if (IsSSL)
                    config.SslSettings = new SslSettings { EnabledSslProtocols = System.Security.Authentication.SslProtocols.Tls12 };

                //var mongoClient = ;
                Database = new MongoClient(config).GetDatabase(DatabaseName);
            }
            catch (Exception ex)
            {
                throw new Exception("Não foi possível se conectar com o servidor.", ex);
            }
        }

        public IMongoCollection<ImportacaoEntity> Dados => Database.GetCollection<ImportacaoEntity>("DadosImportacao");
    }
}