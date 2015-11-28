using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class TeamRepository : ITeamRepository
    {
        #region Properties
        private SurveyEntities dataContext;

        protected SurveyEntities DbContext
        {
            get { return dataContext ?? (dataContext = new SurveyEntities()); }
        }
        #endregion
        public void Add(Team entity)
        {
            throw new NotImplementedException();
        }

        public void Update(Team entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(long id)
        {
            throw new NotImplementedException();
        }

        public void Delete(Expression<Func<Team, bool>> where)
        {
            throw new NotImplementedException();
        }

        public Team GetById(long id)
        {
            throw new NotImplementedException();
        }

        public Team Get(Expression<Func<Team, bool>> where)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Team> GetAll()
        {
            return DbContext.Teams.ToList();
        }

        public IEnumerable<Team> GetMany(Expression<Func<Team, bool>> where)
        {
            throw new NotImplementedException();
        }
    }

    public interface ITeamRepository : IRepository<Team>
    {

    }
}