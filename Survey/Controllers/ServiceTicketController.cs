using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class ServiceTicketController : ApiController
    {
        //IServiceTicketService<ServiceTicket> serviceTicketService;
        private IRepository<Service_Tickets> serviceTicketRepository;

        public ServiceTicketController(IRepository<Service_Tickets> serviceTicketRepository)
        {
            this.serviceTicketRepository = serviceTicketRepository;
        }
        // GET: api/ServiceTicket
        public IEnumerable<Service_Tickets> Get()
        {
            return serviceTicketRepository.GetAll();
        }

        // GET: api/ServiceTicket/5
        public Service_Tickets Get(long id)
        {
            return serviceTicketRepository.GetById(id);
        }

        // POST: api/ServiceTicket
        public void Post(Service_Tickets serviceTicket)
        {
            serviceTicketRepository.Add(serviceTicket);

        }

        // PUT: api/ServiceTicket/5
        public void Put(int id, Service_Tickets serviceTicket)
        {
            serviceTicketRepository.Update(serviceTicket);
        }

        // DELETE: api/ServiceTicket/5
        public void Delete(long id)
        {
            serviceTicketRepository.Delete(id);

        }
    }
}