using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Survey.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Survey.Controllers
{
    public class HomeController : Controller
    {
        //private IRepository<User> userRepository;

        //public HomeController(IRepository<User> userRepository)
        //{
        //    this.userRepository = userRepository;
        //}

        public ActionResult Index()
        {
            SurveyEntities se = new SurveyEntities();
            var role = se.Roles.ToList();
            return View();
        }
        // POST: /Account/Login
        [HttpPost]
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        public  ActionResult  Index(LoginViewModel model, string returnUrl)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // This doesn't count login failures towards account lockout
            // To enable password failures to trigger account lockout, change to shouldLockout: true
            //var result = await SignInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, shouldLockout: false);
            //var result = userRepository.Get(u => u.Email == model.Email && u.Password == model.Password);
            var result =   PasswordSignIn(model.Email, model.Password, model.RememberMe, shouldLockout: false);
            switch (result)
            {
                case SignInStatus.Success:
                    return RedirectToLocal(returnUrl);
                case SignInStatus.EmailNotConfirmed:
                    return View("EmailNotConfirmed");
                case SignInStatus.LockedOut:
                    return View("Lockout");
                case SignInStatus.RequiresTwoFactorAuthentication:
                    return RedirectToAction("SendCode", new { ReturnUrl = returnUrl });
                case SignInStatus.Failure:
                default:
                    ModelState.AddModelError("", "Invalid login attempt.");
                    return View(model);
            }
            //if (result != null)
            //{
            //    return RedirectToLocal(returnUrl);

            //}
            //else
            //{
            //    ModelState.AddModelError("", "Invalid login attempt.");
            //    return View(model);
            //}


        }
        private ActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            return RedirectToAction("Index", "Home");
        }
        public  SignInStatus  PasswordSignIn(string userName, string password, bool isPersistent, bool shouldLockout)
        {
            IRepository<User> userRepository = new UserRepository();

            User user =   userRepository.Get(u => u.Email == userName);
            if (user == null)
            {
                return SignInStatus.Failure;
            }
            if (!(user.EmailConfirmed))
            {
                return SignInStatus.EmailNotConfirmed;
            }
            if (user.IsLocked)
            {
                return SignInStatus.LockedOut;
            }
            if (user.Password == password)
            {
                //return await SignInOrTwoFactor(user, isPersistent);
                var ident = new ClaimsIdentity(new[] { new Claim(ClaimTypes.Name, userName), 
                                                        new Claim(ClaimTypes.Role, user.RoleId.ToString()) 
                                                      },
                                               DefaultAuthenticationTypes.ApplicationCookie);

                HttpContext.GetOwinContext().Authentication.SignIn(new AuthenticationProperties { IsPersistent = false }, ident);
                System.Web.Helpers.AntiForgeryConfig.UniqueClaimTypeIdentifier = System.Security.Claims.ClaimTypes.NameIdentifier;

                //ClaimsIdentity oAuthIdentity = new ClaimsIdentity();
                //ClaimsIdentity cookiesIdentity = new ClaimsIdentity();
                //oAuthIdentity.AddClaim(new Claim(ClaimTypes.Name, user.UserName));

                //oAuthIdentity.AddClaim(new Claim(ClaimTypes.Role, user.RoleId.ToString()));

                //setAuthToken(userName, user.RoleId.ToString());

                return SignInStatus.Success ;
            }
            if (shouldLockout)
            {
                // If lockout is requested, increment access failed count which might lock out the user
                //await UserManager.AccessFailedAsync(user.Id);
                //if (await UserManager.IsLockedOutAsync(user.Id))
                //{
                //    return SignInStatus.LockedOut;
                //}
            }
            return SignInStatus.Failure;
        }
        private void setAuthToken(string Username,string role)
        {
            FormsAuthentication.Initialize();

            // Create a new ticket used for authentication
            FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(
               1, // Ticket version
               Username, // Username associated with ticket
               DateTime.Now, // Date/time issued
               DateTime.Now.AddMinutes(30), // Date/time to expire
               true, // "true" for a persistent user cookie
               role, // User-data, in this case the roles
               FormsAuthentication.FormsCookiePath);// Path cookie valid for

            // Encrypt the cookie using the machine key for secure transport
            string hash = FormsAuthentication.Encrypt(ticket);
            HttpCookie cookie = new HttpCookie(
               FormsAuthentication.FormsCookieName, // Name of auth cookie
               hash); // Hashed ticket

            // Set the cookie's expiration time to the tickets expiration time
            if (ticket.IsPersistent) cookie.Expires = ticket.Expiration;

            // Add the cookie to the list for outgoing response
            Response.Cookies.Set(cookie);
        }
        public enum SignInStatus
        {
            Success,
            EmailNotConfirmed,
            LockedOut,
            RequiresTwoFactorAuthentication,
            Failure
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
    public class CustomIdentity : MarshalByRefObject, System.Security.Principal.IIdentity
    {
        #region Private variables

        private readonly FormsAuthenticationTicket _ticket;
        private readonly string _uniqueIdentifier;

        #endregion

        #region Constuctor

        /// <summary>
        /// Initialize the identity with the FormsAuthenticationTicket in order
        /// to read custom userdata.
        /// </summary>
        /// <param name="ticket"></param>
        public CustomIdentity(FormsAuthenticationTicket ticket)
        {
            _ticket = ticket;
            _uniqueIdentifier = _ticket.UserData;
        }

        #endregion

        #region Properties

        /// <summary>
        /// Gets the AuthenticationType being used.
        /// </summary>
        public string AuthenticationType
        {
            get { return "Forms"; }
        }

        /// <summary>
        /// Gets a flag indicating if the user is Authenticated or not.
        /// </summary>
        public bool IsAuthenticated
        {
            get { return true; }
        }

        /// <summary>
        /// Gets the user name associated with the FormsAuthenticationTicket.
        /// </summary>
        public string Name
        {
            get { return _ticket.Name; }
        }

        /// <summary>
        /// Gets the FormsAuthenticationTicket associated with this User.
        /// </summary>
        public FormsAuthenticationTicket Ticket
        {
            get { return _ticket; }
        }

        /// <summary>
        /// Gets the user's unique identifier stored in the FormsAuthenticationTicket.
        /// </summary>
        public string UniqueIdentifier
        {
            get
            {
                return _uniqueIdentifier;
            }
        }

        #endregion
    }
    public class SignInModel
    {
        [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Required")]
        [System.ComponentModel.DisplayName("User Name:")]
        public string UserName { get; set; }

        [System.ComponentModel.DataAnnotations.Required(ErrorMessage = "Required")]
        [System.ComponentModel.DisplayName("Custom user data:")]
        public string CustomUserData { get; set; }
    }
}