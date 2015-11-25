using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using valuware.Models;

namespace valuware.Controllers
{
    public class FormTemplateDesignController : ApiController
    {
        private formDesignEntities db = new formDesignEntities();

        // GET: api/FormTemplateDesign
        [ActionName("DefaultAction")]
        public IQueryable<Form_Template_Design> GetForm_Template_Design()
        {
            return db.Form_Template_Design;
        }

        // GET: api/FormTemplateDesign/5 // TODO: changes the route name to /api/FTD/template/{id}
        [ResponseType(typeof(IEnumerable<Form_Template_Design>))]
        public IHttpActionResult GetForm_Template_Design(int id)
        {
            var Form_Template_Designs = db.Form_Template_Design.Where(i => i.Form_Template_ID == id);
            //form_template_master Form_Template_Designs = db.form_template_master.Find(id);
            return Ok(Form_Template_Designs);
        }

        //[ActionName("DefaultAction")]
        //public IEnumerable<Form_Template_Design> GetForm_Template_Design(int formTemplateMasterId)
        //{
        //    var Form_Template_Designs = db.Form_Template_Design.Where(i => i.Form_Template_ID == formTemplateMasterId);
        //    return Form_Template_Designs;
        //}

        // PUT: api/FormTemplateDesign/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutForm_Template_Design(int id, Form_Template_Design Form_Template_Design)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Form_Template_Design.Form_Field_ID)
            {
                return BadRequest();
            }

            db.Entry(Form_Template_Design).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Form_Template_DesignExists(id))
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

        // POST: api/FormTemplateDesign
        [ResponseType(typeof(IEnumerable<Form_Template_Design>))]
        public IHttpActionResult PostForm_Template_Design(IEnumerable<Form_Template_Design> Form_Template_DesignList)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            string dynamicTableName = string.Empty;
            StringBuilder addColumns = new StringBuilder();
            foreach (var designElement in Form_Template_DesignList)
            {
                if (string.IsNullOrEmpty(dynamicTableName))
                    dynamicTableName = db.Form_Template_Master.Find(designElement.Form_Template_ID).Form_Entity;

                if (designElement.Form_Field_ID != -1) // Update
                {
                    PutForm_Template_Design(designElement.Form_Field_ID, designElement);
                    AppendAlterColumnStatement(dynamicTableName, addColumns, designElement);
                }
                else // Insert
                {
                    SaveFormTemplateDesign(designElement);
                    AppendAddColumnStatement(dynamicTableName, addColumns, designElement);
                }
            }

            string query = addColumns.ToString();
            if (!string.IsNullOrEmpty(query))
                CreateDynamicQuery(query);

            return CreatedAtRoute("DefaultApi", true, new List<Form_Template_Design>());
        }

        private static void AppendAddColumnStatement(string dynamicTableName, StringBuilder addColumns, Form_Template_Design designElement)
        {
            if (string.IsNullOrEmpty(dynamicTableName) || string.IsNullOrEmpty(designElement.Data_Field_Name) || string.IsNullOrEmpty(designElement.Data_Field_Type))
                return; // To handle 'Label' cases - because these controls would not have any data template columns

                //throw new ApplicationException(string.Format("Invalid data in anyone of these, SurveyTypeName [{0}] - SurveyTypeName [{1}] - SurveyTypeName [{2}]",
                //    dynamicTableName, designElement.Data_Field_Name, designElement.Data_Field_Type));

            addColumns.AppendLine("IF NOT EXISTS(SELECT * FROM sys.columns WHERE Name = N'" + designElement.Data_Field_Name +
            "' AND Object_ID = Object_ID(N'" + dynamicTableName + "'))");
            addColumns.AppendLine("ALTER TABLE [dbo].[" + dynamicTableName + "] ADD [" + designElement.Data_Field_Name + "] " + designElement.Data_Field_Type + " NULL;");
        }

        private static void AppendAlterColumnStatement(string dynamicTableName, StringBuilder addColumns, Form_Template_Design designElement)
        {
            if (string.IsNullOrEmpty(dynamicTableName) || string.IsNullOrEmpty(designElement.Data_Field_Name) || string.IsNullOrEmpty(designElement.Data_Field_Type))
                return;

            addColumns.AppendLine("IF EXISTS(SELECT * FROM sys.columns WHERE Name = N'" + designElement.Data_Field_Name +
            "' AND Object_ID = Object_ID(N'" + dynamicTableName + "'))");
            addColumns.AppendLine("ALTER TABLE [dbo].[" + dynamicTableName + "] ALTER COLUMN [" + designElement.Data_Field_Name + "] " + designElement.Data_Field_Type + " NULL;");
        }

        private void CreateDynamicQuery(string query)
        {
            // TODO: can have table existance check
            var result = db.Database.ExecuteSqlCommand(query);
        }

        private Form_Template_Design SaveFormTemplateDesign(Form_Template_Design Form_Template_Design)
        {
            db.Form_Template_Design.Add(Form_Template_Design);
            db.SaveChanges();

            return Form_Template_Design;
        }

        // DELETE: api/FormTemplateDesign/5
        [ResponseType(typeof(Form_Template_Design))]
        public IHttpActionResult DeleteForm_Template_Design(int id)
        {
            Form_Template_Design Form_Template_Design = db.Form_Template_Design.Find(id);
            if (Form_Template_Design == null)
            {
                return NotFound();
            }

            db.Form_Template_Design.Remove(Form_Template_Design);
            db.SaveChanges();

            return Ok(Form_Template_Design);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Form_Template_DesignExists(int id)
        {
            return db.Form_Template_Design.Count(e => e.Form_Field_ID == id) > 0;
        }
    }
}