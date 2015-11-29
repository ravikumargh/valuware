using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class ClientTypeController : ApiController
    {
        //IClientService<clientType> clientService;
        private IRepository<ClientType> clientTypeRepository;

        public ClientTypeController(IRepository<ClientType> clientTypeRepository)
        {
            this.clientTypeRepository = clientTypeRepository;
        }
        // GET: api/clientType
        public IEnumerable<ClientType> Get()
        {
            return clientTypeRepository.GetAll();
        }

        // GET: api/clientType/5
        public ClientType Get(long id)
        {
            return clientTypeRepository.GetById(id);
        }

        // POST: api/clientType
        public void Post(ClientType clientType)
        {
            clientTypeRepository.Add(clientType);

        }

        // PUT: api/clientType/5
        [Route("api/clientType/{id:int}")]
        public void Put(int id, ClientType clientType)
        {
            clientTypeRepository.Update(clientType);
        }

        // DELETE: api/clientType/5
        public void Delete(long id)
        {
            clientTypeRepository.Delete(id);

        }
    }
}