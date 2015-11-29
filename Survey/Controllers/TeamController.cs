using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class TeamController : ApiController
    {
        //ITeamService<Team> teamService;
        private IRepository<Team> teamRepository;

        public TeamController(IRepository<Team> teamRepository)
        {
            this.teamRepository = teamRepository;
        }
        // GET: api/Team
        public IEnumerable<Team> Get()
        {
            return teamRepository.GetAll();
        }

        // GET: api/Team/5
        public Team Get(int id)
        {
            return teamRepository.GetById(id);
        }

        // POST: api/Team
        public void Post(Team team)
        {
            teamRepository.Add(team);

        }

        // PUT: api/Team/5
        public void Put(Team team)
        {
            teamRepository.Update(team);
        }

        // DELETE: api/Team/5
        public void Delete(int id)
        {
            teamRepository.Delete(id);

        }
    }
}