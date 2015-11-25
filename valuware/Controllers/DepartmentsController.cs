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
    public class DepartmentsController : ApiController
    {
        private formDesignEntities db = new formDesignEntities();

        // GET: api/Departments
        public IQueryable<Department> GetDepartments()
        {
            //var depts = db.Departments;
            var clients = (from r in db.Departments select r);
            return clients; 

            //foreach (var dept in depts)
            //{
            //    Console.WriteLine(dept.Department_ID);
            //}

            //return depts;
        }

        // GET: api/Departments/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult GetDepartment(int id)
        {
            Department Department = db.Departments.Find(id);
            if (Department == null)
            {
                return NotFound();
            }

            return Ok(Department);
        }

        // PUT: api/Departments/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDepartment(int id, Department Department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Department.Department_ID)
            {
                return BadRequest();
            }

            db.Entry(Department).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepartmentExists(id))
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

        // POST: api/Departments
        [ResponseType(typeof(Department))]
        public IHttpActionResult PostDepartment(Department Department)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Departments.Add(Department);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = Department.Department_ID }, Department);
        }

        // DELETE: api/Departments/5
        [ResponseType(typeof(Department))]
        public IHttpActionResult DeleteDepartment(int id)
        {
            Department Department = db.Departments.Find(id);
            if (Department == null)
            {
                return NotFound();
            }

            db.Departments.Remove(Department);
            db.SaveChanges();

            return Ok(Department);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DepartmentExists(int id)
        {
            return db.Departments.Count(e => e.Department_ID == id) > 0;
        }
    }
}