using Microsoft.EntityFrameworkCore;
using Prometheus.Data.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prometheus.Data.Logic
{
    public class Repository<T> : Irepository<T> where T : class
    {
        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }
        public  void Add(T entity)=> _context.Set<T>().Add(entity);
        

        public async Task<IEnumerable<T>> Get()=>await _context.Set<T>().ToListAsync();
        

        public async Task<T> GetById(int id) => await _context.Set<T>().FindAsync(id);
        

        public  void Remove(T entity)
        {
            
             _context.Remove(entity); 
        }

        public async Task  SaveAsync()=> await _context.SaveChangesAsync();
        

        public  void Update(T entity)=> _context.Set<T>().Update(entity);
        
    }
}
