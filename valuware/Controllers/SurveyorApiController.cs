using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace valuware.Controllers
{
    public class SurveyorApiController : ApiController
    {
        public HttpResponseMessage postImages(string id)
        {
            // id is ticket reference Number
           
                HttpResponseMessage result = null;
                var httpRequest = HttpContext.Current.Request;
                if (httpRequest.Files.Count > 0)
                {
                    var docfiles = new List<string>();
                    foreach (string file in httpRequest.Files)
                    {
                        var postedFile = httpRequest.Files[file];
                        if (String.IsNullOrEmpty(postedFile.FileName)) continue;
                        string folderpath = HttpContext.Current.Server.MapPath("~/Images/SurveyForms/" + id.ToString());
                        if (!Directory.Exists(folderpath))
                        {
                            Directory.CreateDirectory(folderpath);
                        }
                        var filePath = folderpath + "/" + postedFile.FileName;

                        postedFile.SaveAs(filePath);
                        docfiles.Add(postedFile.FileName + "successfully uploaded");
                    }
                    result = Request.CreateResponse(HttpStatusCode.Created, docfiles);
                }
                else
                {
                    result = Request.CreateResponse(HttpStatusCode.BadRequest);
                }
                return result;
           
        }
    }
}
