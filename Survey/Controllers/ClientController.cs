using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class ClientController : ApiController
    {
        //IClientService<Client> clientService;
        private IRepository<Client_Master> clientRepository;

        public ClientController(IRepository<Client_Master> clientRepository)
        {
            this.clientRepository = clientRepository;
        }
        // GET: api/Client
        public IEnumerable<Client_Master> Get()
        {
            return clientRepository.GetAll();
        }

        // GET: api/Client/5
        public Client_Master Get(long id)
        {
            return clientRepository.GetById(id);
        }

        // POST: api/Client
        public void Post(Client_Master client)
        {
            clientRepository.Add(client);

        }

        // PUT: api/Client/5
        public void Put(Client_Master client)
        {
            clientRepository.Update(client);
        }

        // DELETE: api/Client/5
        public void Delete(int id)
        {
            clientRepository.Delete(id);

        }
    }
}