using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

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
            return roleRepository.GetAll();
        }

        // GET: api/Role/5
        public Role Get(long id)
        {
            return roleRepository.GetById(id);
        }

        // POST: api/Role
        public void Post(Role role)
        {
            roleRepository.Add(role);

        }

        // PUT: api/Role/5
        public void Put(int id, Role role)
        {
            roleRepository.Update(role);
        }

        // DELETE: api/Role/5
        public void Delete(long id)
        {
            roleRepository.Delete(id);

        }
    }
}