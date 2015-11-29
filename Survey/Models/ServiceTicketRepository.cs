using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class ServiceTicketRepository : RepositoryBase, IServiceTicketRepository
    {
         
        public void Add(Service_Tickets entity)
        {
            DbContext.Service_Tickets.Add(entity);
            entity.Created_On = DateTime.Now;
            DbContext.SaveChanges();
        }

        public void Update(Service_Tickets entity)
        {
            Service_Tickets serviceTicket = GetById(entity.Service_Ticket_ID);
            serviceTicket.Updated_On = DateTime.Now;

            //serviceTicket.Name = entity.Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Service_Tickets serviceTicket = GetById(id);
            DbContext.Service_Tickets.Remove(serviceTicket);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<Service_Tickets, bool>> where)
        {
            Service_Tickets serviceTicket = Get(where);
            DbContext.Service_Tickets.Remove(serviceTicket);
            DbContext.SaveChanges();
        }

        public Service_Tickets GetById(long id)
        {
            return DbContext.Service_Tickets.Where(w => w.Service_Ticket_ID == id).FirstOrDefault();

        }

        public Service_Tickets Get(Expression<Func<Service_Tickets, bool>> where)
        {
            return DbContext.Service_Tickets.Where(where).FirstOrDefault<Service_Tickets>();

        }

        public IEnumerable<Service_Tickets> GetAll()
        {
            return DbContext.Service_Tickets.ToList();
        }

        public IEnumerable<Service_Tickets> GetMany(Expression<Func<Service_Tickets, bool>> where)
        {
            return DbContext.Service_Tickets.Where(where).ToList();

        }
    }

    public interface IServiceTicketRepository : IRepository<Service_Tickets>
    {

    }

}