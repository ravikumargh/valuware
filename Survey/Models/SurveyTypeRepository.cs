using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class SurveyTypeRepository : RepositoryBase, ISurvey_TypeRepository
    {
         
        public void Add(Survey_Types entity)
        {
            DbContext.Survey_Types.Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(Survey_Types entity)
        {
            Survey_Types survey_Type = GetById(entity.Survey_Type_ID);
            survey_Type.Survey_Type_Name = entity.Survey_Type_Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Survey_Types survey_Type = GetById(id);
            DbContext.Survey_Types.Remove(survey_Type);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<Survey_Types, bool>> where)
        {
            Survey_Types survey_Type = Get(where);
            DbContext.Survey_Types.Remove(survey_Type);
            DbContext.SaveChanges();
        }

        public Survey_Types GetById(long id)
        {
            return DbContext.Survey_Types.Where(w => w.Survey_Type_ID == id).FirstOrDefault();

        }

        public Survey_Types Get(Expression<Func<Survey_Types, bool>> where)
        {
            return DbContext.Survey_Types.Where(where).FirstOrDefault<Survey_Types>();

        }

        public IEnumerable<Survey_Types> GetAll()
        {
            return DbContext.Survey_Types.ToList();
        }

        public IEnumerable<Survey_Types> GetMany(Expression<Func<Survey_Types, bool>> where)
        {
            return DbContext.Survey_Types.Where(where).ToList();

        }
    }

    public interface ISurvey_TypeRepository : IRepository<Survey_Types>
    {

    }

}