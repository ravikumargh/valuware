using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using valuware.Models;

namespace valuware.Controllers
{
    public class QualityController : Controller
    {
        //
        // GET: /Quality/
        public ActionResult QualityListing()
        {
            QualityEntities _dbContext = new QualityEntities();
            dynamic list = new ExpandoObject();
            list = _dbContext.getQualityListing().ToList();
            return View(list);
        }

        // [ChildActionOnly]
        public ActionResult getSurveyItemMaster(string id)
        {
            ViewBag.ReferenceNumber = id;
            QualityEntities _dbContext = new QualityEntities();
            getSurveyItemMasterInfo_Result MasterInfo = _dbContext.getSurveyItemMasterInfo(id).FirstOrDefault();
            string refNum = id;
            return View(MasterInfo);
        }
        public ActionResult saveSurveyItemMaster(getSurveyItemMasterInfo_Result minfo)
        {
            QualityEntities _dbContext = new QualityEntities();
            string ReferenceNumber = minfo.Reference_Number;

            Service_Tickets st = _dbContext.Service_Tickets.Find(minfo.Service_Ticket_ID);
            st.Status = minfo.Status;
            Survey_Item_Master sim = _dbContext.Survey_Item_Master.Find(ReferenceNumber);
            if (sim == null)
            {
                sim = new Survey_Item_Master();
                sim.Reference_Number = ReferenceNumber;
                sim.Commission = minfo.Commission;
                sim.Inspection_date = minfo.Inspection_date;
                sim.Survey_Rating = minfo.Survey_Rating;
                sim.Surveyor_User_ID = minfo.Id;
                sim.Created_On = DateTime.Now;
                sim.Created_By = 1; // Logged in user ID.
                _dbContext.Survey_Item_Master.Add(sim);
            }
            else
            {
                sim.Commission = minfo.Commission;
                sim.Inspection_date = minfo.Inspection_date;
                sim.Survey_Rating = minfo.Survey_Rating;
                sim.Updated_On = DateTime.Now;
                sim.Updated_By = 1; // Logged in user ID
            }
            _dbContext.SaveChanges();
            return RedirectToAction("QualityListing");
        }
        public ActionResult QualityEdit(string id = "0111131020")
        {
            ViewBag.ReferenceNumber = id;
            QualityEntities _dbContext = new QualityEntities();
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