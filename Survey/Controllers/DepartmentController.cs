using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class DepartmentController : ApiController
    {
        //IDepartmentService<Department> departmentService;
        private IRepository<Department> departmentRepository;

        public DepartmentController(IRepository<Department> departmentRepository)
        {
            this.departmentRepository = departmentRepository;
        }
        // GET: api/Department
        public IEnumerable<Department> Get()
        {
            return departmentRepository.GetAll();
        }

        // GET: api/Department/5
        public Department Get(long id)
        {
            return departmentRepository.GetById(id);
        }

        // POST: api/Department
        public void Post(Department department)
        {
            departmentRepository.Add(department);

        }

        // PUT: api/Department/5
        public void Put(int id, Department department)
        {
            departmentRepository.Update(department);
        }

        // DELETE: api/Department/5
        public void Delete(long id)
        {
            departmentRepository.Delete(id);

        }
    }
}