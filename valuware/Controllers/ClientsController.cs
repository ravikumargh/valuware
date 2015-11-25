using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using valuware.Models;

namespace valuware.Controllers
{
    public class ClientsController : ApiController
    {
        private formDesignEntities db = new formDesignEntities();

        // GET: api/Clients
        //public HttpResponseMessage GetClient_Master()
        public IQueryable<Client_Master> GetClient_Master()
        {
            //Test t = new Test() { ID = 1, Name = "ma" };
            //var clients = db.Client_Master.ToList();
            //HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, clients);

            //return response;
            return db.Client_Master;

        }

        // GET: api/Clients/5
        [ResponseType(typeof(Client_Master))]
        public IHttpActionResult GetClient_Master(int id)
        {
            Client_Master Client_Master = db.Client_Master.Find(id);
            if (Client_Master == null)
            {
                return NotFound();
            }

            return Ok(Client_Master);
        }

        // PUT: api/Clients/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutClient_Master(int id, Client_Master Client_Master)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Client_Master.Client_ID)
            {
                return BadRequest();
            }

            db.Entry(Client_Master).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Client_MasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Clients
        [ResponseType(typeof(Client_Master))]
        public IHttpActionResult PostClient_Master(Client_Master Client_Master)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Client_Master.Add(Client_Master);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = Client_Master.Client_ID }, Client_Master);
        }

        // DELETE: api/Clients/5
        [ResponseType(typeof(Client_Master))]
        public IHttpActionResult DeleteClient_Master(int id)
        {
            Client_Master Client_Master = db.Client_Master.Find(id);
            if (Client_Master == null)
            {
                return NotFound();
            }

            db.Client_Master.Remove(Client_Master);
            db.SaveChanges();

            return Ok(Client_Master);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Client_MasterExists(int id)
        {
            return db.Client_Master.Count(e => e.Client_ID == id) > 0;
        }
    }
}