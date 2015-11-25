//using jsreport.MVC;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using valuware.Models;

namespace valuware.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

     
        public ActionResult FormDesigner()
        {


            return View();
        }
        public ActionResult FormTemplateList()
        {
            return View();
        }
      
    }
}