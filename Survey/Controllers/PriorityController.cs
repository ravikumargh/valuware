using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class PriorityController : ApiController
    {
        //IPriorityService<Priority> priorityService;
        private IRepository<Priority> priorityRepository;

        public PriorityController(IRepository<Priority> priorityRepository)
        {
            this.priorityRepository = priorityRepository;
        }
        // GET: api/Priority
        public IEnumerable<Priority> Get()
        {
            return priorityRepository.GetAll();
        }

        // GET: api/Priority/5
        public Priority Get(long id)
        {
            return priorityRepository.GetById(id);
        }

        // POST: api/Priority
        public void Post(Priority priority)
        {
            priorityRepository.Add(priority);

        }

        // PUT: api/Priority/5
        public void Put(int id, Priority priority)
        {
            priorityRepository.Update(priority);
        }

        // DELETE: api/Priority/5
        public void Delete(long id)
        {
            priorityRepository.Delete(id);

        }
    }
}