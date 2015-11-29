using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace Survey.Models
{
    public class TeamRepository : RepositoryBase, ITeamRepository
    {

        public void Add(Team entity)
        {
            DbContext.Teams.Add(entity);
            DbContext.SaveChanges();
        }

        public void Update(Team entity)
        {
            Team team = GetById(entity.Id);
            team.Name = entity.Name;
            DbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Team team = GetById(id);
            DbContext.Teams.Remove(team);
            DbContext.SaveChanges();
        }

        public void Delete(Expression<Func<Team, bool>> where)
        {
            Team team = Get(where);
            DbContext.Teams.Remove(team);
            DbContext.SaveChanges();
        }

        public Team GetById(long id)
        {
            return DbContext.Teams.Where(w => w.Id == id).FirstOrDefault();

        }

        public Team Get(Expression<Func<Team, bool>> where)
        {
            return DbContext.Teams.Where(where).FirstOrDefault<Team>();

        }

        public IEnumerable<Team> GetAll()
        {
            return DbContext.Teams.ToList();
        }

        public IEnumerable<Team> GetMany(Expression<Func<Team, bool>> where)
        {
            return DbContext.Teams.Where(where).ToList();

        }
    }

    public interface ITeamRepository : IRepository<Team>
    {

    }

}