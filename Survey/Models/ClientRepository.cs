using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class ClientRepository : RepositoryBase, IClientRepository
    {
         
        public void Add(Client_Master entity)
        {
            DbContext.Client_Master.Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(Client_Master entity)
        {
            Client_Master client = GetById(entity.Client_ID);
            client.Client_Name = entity.Client_Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Client_Master client = GetById(id);
            DbContext.Client_Master.Remove(client);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<Client_Master, bool>> where)
        {
            Client_Master client = Get(where);
            DbContext.Client_Master.Remove(client);
            DbContext.SaveChanges();
        }

        public Client_Master GetById(long id)
        {
            return DbContext.Client_Master.Where(w => w.Client_ID == id).FirstOrDefault();

        }

        public Client_Master Get(Expression<Func<Client_Master, bool>> where)
        {
            return DbContext.Client_Master.Where(where).FirstOrDefault<Client_Master>();

        }

        public IEnumerable<Client_Master> GetAll()
        {
            return DbContext.Client_Master.ToList();
        }

        public IEnumerable<Client_Master> GetMany(Expression<Func<Client_Master, bool>> where)
        {
            return DbContext.Client_Master.Where(where).ToList();

        }
    }

    public interface IClientRepository : IRepository<Client_Master>
    {

    }

}