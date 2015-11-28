using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class ClientTypeRepository : RepositoryBase, IClientTypeRepository
    {
         
        public void Add(ClientType entity)
        {
            DbContext.ClientTypes.Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(ClientType entity)
        {
            ClientType clientType = GetById(entity.Id);
            clientType.Name = entity.Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            ClientType clientType = GetById(id);
            DbContext.ClientTypes.Remove(clientType);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<ClientType, bool>> where)
        {
            ClientType clientType = Get(where);
            DbContext.ClientTypes.Remove(clientType);
            DbContext.SaveChanges();
        }

        public ClientType GetById(long id)
        {
            return DbContext.ClientTypes.Where(w => w.Id == id).FirstOrDefault();

        }

        public ClientType Get(Expression<Func<ClientType, bool>> where)
        {
            return DbContext.ClientTypes.Where(where).FirstOrDefault<ClientType>();

        }

        public IEnumerable<ClientType> GetAll()
        {
            return DbContext.ClientTypes.ToList();
        }

        public IEnumerable<ClientType> GetMany(Expression<Func<ClientType, bool>> where)
        {
            return DbContext.ClientTypes.Where(where).ToList();

        }
    }

    public interface IClientTypeRepository : IRepository<ClientType>
    {

    }

}