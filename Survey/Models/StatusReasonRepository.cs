using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class StatusReasonRepository : RepositoryBase, IStatusReasonRepository
    {
         
        public void Add(StatusReason entity)
        {
            DbContext.StatusReasons.Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(StatusReason entity)
        {
            StatusReason statusReason = GetById(entity.Id);
            statusReason.Name = entity.Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            StatusReason statusReason = GetById(id);
            DbContext.StatusReasons.Remove(statusReason);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<StatusReason, bool>> where)
        {
            StatusReason statusReason = Get(where);
            DbContext.StatusReasons.Remove(statusReason);
            DbContext.SaveChanges();
        }

        public StatusReason GetById(long id)
        {
            return DbContext.StatusReasons.Where(w => w.Id == id).FirstOrDefault();

        }

        public StatusReason Get(Expression<Func<StatusReason, bool>> where)
        {
            return DbContext.StatusReasons.Where(where).FirstOrDefault<StatusReason>();

        }

        public IEnumerable<StatusReason> GetAll()
        {
            return DbContext.StatusReasons.ToList();
        }

        public IEnumerable<StatusReason> GetMany(Expression<Func<StatusReason, bool>> where)
        {
            return DbContext.StatusReasons.Where(where).ToList();

        }
    }

    public interface IStatusReasonRepository : IRepository<StatusReason>
    {

    }

}