using Survey.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using System.Web.Security;

namespace Survey
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Bootstrapper.Initialise();//Used for UNity IOC
        }
        //protected void Application_OnPostAuthenticateRequest(object sender, EventArgs e)
        //{
        //    // Get a reference to the current User
        //    IPrincipal currentUser = HttpContext.Current.User;

        //    // If we are dealing with an authenticated forms authentication request
        //    if (currentUser.Identity.IsAuthenticated
        //        && currentUser.Identity.GetType() != typeof(CustomIdentity))
        //    {
        //        // Create a CustomIdentity based on the FormsAuthenticationTicket           
        //        var identity = new CustomIdentity(((FormsIdentity)currentUser.Identity).Ticket);

        //        // Create the CustomPrincipal
        //        var user = new GenericPrincipal(identity, null);

        //        // Attach the CustomPrincipal to HttpContext.User and Thread.CurrentPrincipal
        //        HttpContext.Current.User = user;
        //        System.Threading.Thread.CurrentPrincipal = user;
        //    }
        //}

        //protected void Application_AuthenticateRequest(Object sender, EventArgs e)
        //{
        //    if (HttpContext.Current.User != null)
        //    {
        //        if (HttpContext.Current.User.Identity.IsAuthenticated)
        //        {
        //            if (HttpContext.Current.User.Identity is FormsIdentity)
        //            {
        //                FormsIdentity id = (FormsIdentity)HttpContext.Current.User.Identity;
        //                FormsAuthenticationTicket ticket = id.Ticket;

        //                // Get the stored user-data, in this case, our roles
        //                string userData = ticket.UserData;
        //                string[] roles = userData.Split(',');
        //                HttpContext.Current.User = new GenericPrincipal(id, roles);
        //            }
        //        }
        //    }
        //}
    }
}
