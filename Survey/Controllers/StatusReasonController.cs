using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class StatusReasonController : ApiController
    {
        //IStatusReasonService<StatusReason> statusReasonService;
        private IRepository<StatusReason> statusReasonRepository;

        public StatusReasonController(IRepository<StatusReason> statusReasonRepository)
        {
            this.statusReasonRepository = statusReasonRepository;
        }
        // GET: api/StatusReason
        public IEnumerable<StatusReason> Get()
        {
            return statusReasonRepository.GetAll();
        }

        // GET: api/StatusReason/5
        public StatusReason Get(long id)
        {
            return statusReasonRepository.GetById(id);
        }

        // POST: api/StatusReason
        public void Post(StatusReason statusReason)
        {
            statusReasonRepository.Add(statusReason);

        }

        // PUT: api/StatusReason/5
        public void Put(int id, StatusReason statusReason)
        {
            statusReasonRepository.Update(statusReason);
        }

        // DELETE: api/StatusReason/5
        public void Delete(long id)
        {
            statusReasonRepository.Delete(id);

        }
    }
}