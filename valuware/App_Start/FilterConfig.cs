//using jsreport.Embedded;
//using jsreport.MVC;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace valuware
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());

            ////when using .net embedded version you need to start server first


            //EmbeddedReportingServer embedReportServer = new EmbeddedReportingServer();
            //embedReportServer.StartAsync().Wait();
            //filters.Add(new JsReportFilterAttribute(embedReportServer.ReportingService));

            ////when using on prem or online just instantiate ReportingService with correct url
            ////filters.Add(new JsReportFilterAttribute(new ReportingService("http://localhost:2000")));
        }

    }
}
