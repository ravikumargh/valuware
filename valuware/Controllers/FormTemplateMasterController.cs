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
    public class Person
    {
        public string aaa { get; set; }
    }

    public class FormTemplateMasterController : ApiController
    {
        private formDesignEntities db = new formDesignEntities();

        // GET: api/FormTemplateMaster
        public IQueryable<Form_Template_Master> GetForm_Template_Master()
        {
            return db.Form_Template_Master;
        }

        // GET: api/FormTemplateMaster/5
        [ResponseType(typeof(Form_Template_Master))]
        public IHttpActionResult GetForm_Template_Master(int id)
        {
            Form_Template_Master Form_Template_Master = db.Form_Template_Master.Find(id);
            if (Form_Template_Master == null)
            {
                return NotFound();
            }

            return Ok(Form_Template_Master);
        }

        // PUT: api/FormTemplateMaster/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutForm_Template_Master(int id, Form_Template_Master Form_Template_Master)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Form_Template_Master.Form_Template_ID)
            {
                return BadRequest();
            }

            db.Entry(Form_Template_Master).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Form_Template_MasterExists(id))
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

        // POST: api/FormTemplateMaster
        [ResponseType(typeof(Form_Template_Master))]
        public IHttpActionResult PostForm_Template_Master(Form_Template_Master Form_Template_Master)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (Form_Template_Master.Form_Template_ID != -1)
                PutForm_Template_Master(Form_Template_Master.Form_Template_ID, Form_Template_Master);
            else
            {
                db.Form_Template_Master.Add(Form_Template_Master);
                db.SaveChanges();
                CreateDynamicTable(Form_Template_Master.Form_Entity);
            }

            return CreatedAtRoute("DefaultApi", true, Form_Template_Master);
        }

        private void CreateDynamicTable(string tableName)
        {
            string createTableCommand = "CREATE TABLE [dbo].[" + tableName + "] (" +
                "[Reference_Number] VARCHAR(50) NOT NULL," +
                "PRIMARY KEY CLUSTERED ([" + "Reference_Number" + "] ASC));";

            var result = db.Database.ExecuteSqlCommand(createTableCommand);
        }

        // DELETE: api/FormTemplateMaster/5
        [ResponseType(typeof(Form_Template_Master))]
        public IHttpActionResult DeleteForm_Template_Master(int id)
        {
            Form_Template_Master Form_Template_Master = db.Form_Template_Master.Find(id);
            if (Form_Template_Master == null)
            {
                return NotFound();
            }

            db.Form_Template_Master.Remove(Form_Template_Master);
            db.SaveChanges();

            return Ok(Form_Template_Master);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Form_Template_MasterExists(int id)
        {
            return db.Form_Template_Master.Count(e => e.Form_Template_ID == id) > 0;
        }
    }
}