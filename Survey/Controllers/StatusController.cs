using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class StatusController : ApiController
    {
        //IStatusService<Status> statusService;
        private IRepository<Status> statusRepository;

        public StatusController(IRepository<Status> statusRepository)
        {
            this.statusRepository = statusRepository;
        }
        // GET: api/Status
        public IEnumerable<Status> Get()
        {
            return statusRepository.GetAll();
        }

        // GET: api/Status/5
        public Status Get(long id)
        {
            return statusRepository.GetById(id);
        }

        // POST: api/Status
        public void Post(Status status)
        {
            statusRepository.Add(status);

        }

        // PUT: api/Status/5
        public void Put(int id, Status status)
        {
            statusRepository.Update(status);
        }

        // DELETE: api/Status/5
        public void Delete(long id)
        {
            statusRepository.Delete(id);

        }
    }
}