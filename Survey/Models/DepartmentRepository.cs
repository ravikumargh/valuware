using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class DepartmentRepository : RepositoryBase, IDepartmentRepository
    {
         
        public void Add(Department entity)
        {
            DbContext.Departments.Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(Department entity)
        {
            Department department = GetById(entity.Id);
            department.Name = entity.Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Department department = GetById(id);
            DbContext.Departments.Remove(department);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<Department, bool>> where)
        {
            Department department = Get(where);
            DbContext.Departments.Remove(department);
            DbContext.SaveChanges();
        }

        public Department GetById(long id)
        {
            return DbContext.Departments.Where(w => w.Id == id).FirstOrDefault();

        }

        public Department Get(Expression<Func<Department, bool>> where)
        {
            return DbContext.Departments.Where(where).FirstOrDefault<Department>();

        }

        public IEnumerable<Department> GetAll()
        {
            return DbContext.Departments.ToList();
        }

        public IEnumerable<Department> GetMany(Expression<Func<Department, bool>> where)
        {
            return DbContext.Departments.Where(where).ToList();

        }
    }

    public interface IDepartmentRepository : IRepository<Department>
    {

    }

}