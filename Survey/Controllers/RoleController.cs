using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Web.Models;

namespace Survey.Controllers
{
    public class RoleController : ApiController
    {
        //IRoleService<Role> roleService;
        private IRepository<Role> roleRepository;

        public RoleController(IRepository<Role> roleRepository)
        {
            this.roleRepository = roleRepository;
        }
        // GET: api/Role
        public IEnumerable<Role> Get()
        {
            //return new string[] { "value1", "value2" };
            return roleRepository.GetAll();
        }

        // GET: api/Role/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Role
        public void Post(Role role)
        {
            //roleRepository.Add(role);

        }

        // PUT: api/Role/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Role/5
        public void Delete(int id)
        {
        }
    }
}