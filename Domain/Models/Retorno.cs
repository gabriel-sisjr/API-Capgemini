namespace Domain.Models
{
    public class Retorno<T>
    {
        public string Msg { get; set; }
        public T Data { get; set; }
        public static Retorno<T> GetResult(string msg, T data = default)
         => new Retorno<T>
         {
             Msg = msg,
             Data = data
         };
    }
}
