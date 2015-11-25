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
    public class SurveyTypesController : ApiController
    {
        private formDesignEntities db = new formDesignEntities();

        // GET: api/SurveyTypes
        public IQueryable<Survey_Types> GetSurvey_Types()
        {
            return db.Survey_Types;
        }

        // GET: api/SurveyTypes/5
        [ResponseType(typeof(Survey_Types))]
        public IHttpActionResult GetSurvey_Types(int id)
        {
            Survey_Types Survey_Types = db.Survey_Types.Find(id);
            if (Survey_Types == null)
            {
                return NotFound();
            }

            return Ok(Survey_Types);
        }

        // PUT: api/SurveyTypes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSurvey_Types(int id, Survey_Types Survey_Types)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Survey_Types.Survey_Type_ID)
            {
                return BadRequest();
            }

            db.Entry(Survey_Types).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Survey_TypesExists(id))
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

        // POST: api/SurveyTypes
        [ResponseType(typeof(Survey_Types))]
        public IHttpActionResult PostSurvey_Types(Survey_Types Survey_Types)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Survey_Types.Add(Survey_Types);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = Survey_Types.Survey_Type_ID }, Survey_Types);
        }

        // DELETE: api/SurveyTypes/5
        [ResponseType(typeof(Survey_Types))]
        public IHttpActionResult DeleteSurvey_Types(int id)
        {
            Survey_Types Survey_Types = db.Survey_Types.Find(id);
            if (Survey_Types == null)
            {
                return NotFound();
            }

            db.Survey_Types.Remove(Survey_Types);
            db.SaveChanges();

            return Ok(Survey_Types);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Survey_TypesExists(int id)
        {
            return db.Survey_Types.Count(e => e.Survey_Type_ID == id) > 0;
        }
    }
}