using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using valuware.Models;
using System.Web.Http;
using System.Net.Http;
using System.Net;
using System.IO;

namespace valuware.Controllers
{
    public class SurveyorController : Controller
    {
        SurveyEntities _dbContext = new SurveyEntities();
        //
        // GET: /Surveyor/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult TeamLeadListing()
        {
            dynamic list = new ExpandoObject();
            list = _dbContext.getSurveyLeadListing().ToList();
            return View(list);
        }
        public ActionResult TeamLeadEdit(string id)
        {
            ViewBag.ReferenceNumber = id;
           
            string refNum = id;
            SqlCommand cmd = (SqlCommand)_dbContext.Database.Connection.CreateCommand();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "getFormDesignData";
            cmd.Parameters.Add("@referenceNumber", SqlDbType.VarChar).Value = refNum;
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            adp.Fill(ds);

            DataTable dt = ds.Tables[0];
            Dictionary<string, string> dict = new Dictionary<string, string>();
            for (int i = 0; i < dt.Columns.Count; i++)
            {
                dict.Add(dt.Columns[i].ColumnName, dt.Rows[0][i].ToString());
            }

            DataTable designTable = ds.Tables[1];
            foreach (DataRow row in designTable.Rows)
            {
                string fieldName = row["Data_Field_Name"].ToString();
                string fieldvalue;
                dict.TryGetValue(fieldName, out fieldvalue);
                if (fieldvalue == null) continue;
                row["Content"] = fieldvalue;
            }
            return View(designTable);

        }

        public ActionResult saveSurveyForm(string id)
        {   
            string fieldNames = "Reference_Number";
            string values = "'" + id + "'";
            string setString = "Reference_Number='" + id + "'";
            SurveyEntities _dbContext = new SurveyEntities();
            foreach (string key in Request.Form.Keys)
            {

                fieldNames += "," + key;
                values += "," + "'" + Request.Form[key] + "'";
                setString += "," + key + "='" + Request.Form[key] + "'";
            }
            var data = _dbContext.submitFormData(id, "", fieldNames, values, setString);

            return RedirectToAction("TeamLeadListing");
        }

        public ActionResult submitSurveyForm(string id)
        {
           string fieldNames = "Reference_Number";
            string values = "'" + id + "'";
            string setString = "Reference_Number='" + id + "'";
            SurveyEntities _dbContext = new SurveyEntities();

            foreach (string key in Request.Form.Keys)
            {

                fieldNames += "," + key;
                values += "," + "'" + Request.Form[key] + "'";
                setString += "," + key + "='" + Request.Form[key] + "'";
            }
            var data = _dbContext.submitFormData(id, "", fieldNames, values, setString);

            if (Request.Files.Count > 0)
            {

                for (int i = 0; i < Request.Files.Count; i++)
                {
                    var postedFile = Request.Files[i];
                    if (String.IsNullOrEmpty(postedFile.FileName)) continue;
                    string folderpath = Server.MapPath("~/Images/SurveyForms/" + id.ToString());
                    if (!Directory.Exists(folderpath))
                    {
                        Directory.CreateDirectory(folderpath);
                    }
                    var filePath = folderpath + "/" + postedFile.FileName;

                    postedFile.SaveAs(filePath);
                }
                
            }  
            return RedirectToAction("SurveyListing");
        }
        public ActionResult SurveyListing()
        {
            dynamic list = new ExpandoObject();
            list = _dbContext.getSurveyListing().ToList();
            return View(list);
        }

        public ActionResult SurveyEdit(string id)
        {
            ViewBag.ReferenceNumber = id;

            string refNum = id;
            SqlCommand cmd = (SqlCommand)_dbContext.Database.Connection.CreateCommand();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandText = "getFormDesignData";
            cmd.Parameters.Add("@referenceNumber", SqlDbType.VarChar).Value = refNum;
            SqlDataAdapter adp = new SqlDataAdapter(cmd);
            DataSet ds = new DataSet();
            adp.Fill(ds);

            DataTable dt = ds.Tables[0];
            Dictionary<string, string> dict = new Dictionary<string, string>();
            for (int i = 0; i < dt.Columns.Count; i++)
            {
                if (dt.Rows.Count > 0)
                {
                    dict.Add(dt.Columns[i].ColumnName, dt.Rows[0][i].ToString());
                }
                else
                {
                    dict.Add(dt.Columns[i].ColumnName, "");
                }
               
            }

            DataTable designTable = ds.Tables[1];
            foreach (DataRow row in designTable.Rows)
            {
                string fieldName = row["Data_Field_Name"].ToString();
                string fieldvalue;
                dict.TryGetValue(fieldName, out fieldvalue);
                if (fieldvalue == null) continue;
                row["Content"] = fieldvalue;
            }
            return View(designTable);

        }

	}
}