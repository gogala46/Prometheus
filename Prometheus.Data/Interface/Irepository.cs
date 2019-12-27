using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Prometheus.Data.Interface
{
    public interface Irepository<T> where T :class
    {
        void Add(T entity);
        Task<T> GetById(int id);
        Task<IEnumerable<T>> Get();
        void Remove(T entity);
        Task SaveAsync();
        void Update(T entity);
    }
}
