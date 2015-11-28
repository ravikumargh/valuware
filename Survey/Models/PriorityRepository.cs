using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class PriorityRepository : RepositoryBase, IPriorityRepository
    {
         
        public void Add(Priority entity)
        {
            DbContext.Priorities.Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(Priority entity)
        {
            Priority priority = GetById(entity.Id);
            priority.Name = entity.Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Priority priority = GetById(id);
            DbContext.Priorities.Remove(priority);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<Priority, bool>> where)
        {
            Priority priority = Get(where);
            DbContext.Priorities.Remove(priority);
            DbContext.SaveChanges();
        }

        public Priority GetById(long id)
        {
            return DbContext.Priorities.Where(w => w.Id == id).FirstOrDefault();

        }

        public Priority Get(Expression<Func<Priority, bool>> where)
        {
            return DbContext.Priorities.Where(where).FirstOrDefault<Priority>();

        }

        public IEnumerable<Priority> GetAll()
        {
            return DbContext.Priorities.ToList();
        }

        public IEnumerable<Priority> GetMany(Expression<Func<Priority, bool>> where)
        {
            return DbContext.Priorities.Where(where).ToList();

        }
    }

    public interface IPriorityRepository : IRepository<Priority>
    {

    }

}