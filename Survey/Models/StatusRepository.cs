using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class StatusRepository : RepositoryBase, IStatusRepository
    {
         
        public void Add(Status entity)
        {
            DbContext.Status.Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(Status entity)
        {
            Status status = GetById(entity.Id);
            status.Name = entity.Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Status status = GetById(id);
            DbContext.Status.Remove(status);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<Status, bool>> where)
        {
            Status status = Get(where);
            DbContext.Status.Remove(status);
            DbContext.SaveChanges();
        }

        public Status GetById(long id)
        {
            return DbContext.Status.Where(w => w.Id == id).FirstOrDefault();

        }

        public Status Get(Expression<Func<Status, bool>> where)
        {
            return DbContext.Status.Where(where).FirstOrDefault<Status>();

        }

        public IEnumerable<Status> GetAll()
        {
            return DbContext.Status.ToList();
        }

        public IEnumerable<Status> GetMany(Expression<Func<Status, bool>> where)
        {
            return DbContext.Status.Where(where).ToList();

        }
    }

    public interface IStatusRepository : IRepository<Status>
    {

    }

}