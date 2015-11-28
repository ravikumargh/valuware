using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class UserController : ApiController
    {
        //IUserService<User> userService;
        private IRepository<User> userRepository;

        public UserController(IRepository<User> userRepository)
        {
            this.userRepository = userRepository;
        }
        // GET: api/User
        public IEnumerable<User> Get()
        {
            return userRepository.GetAll();
        }

        // GET: api/User/5
        public User Get(int id)
        {
            return userRepository.GetById(id);
        }

        // POST: api/User
        public void Post(User user)
        {
            userRepository.Add(user);

        }

        // PUT: api/User/5
        public void Put(int id, User user)
        {
            userRepository.Update(user);
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
            userRepository.Delete(id);
        }
    }
}