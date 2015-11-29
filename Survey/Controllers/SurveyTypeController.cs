using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Survey.Models;

namespace Survey.Controllers
{
    public class SurveyTypeController : ApiController
    {
        //ISurveyTypeService<Survey_Types> surveyTypeService;
        private IRepository<Survey_Types> surveyTypeRepository;

        public SurveyTypeController(IRepository<Survey_Types> surveyTypeRepository)
        {
            this.surveyTypeRepository = surveyTypeRepository;
        }
        // GET: api/Survey_Types
        public IEnumerable<Survey_Types> Get()
        {
            return surveyTypeRepository.GetAll();
        }

        // GET: api/Survey_Types/5
        public Survey_Types Get(long id)
        {
            return surveyTypeRepository.GetById(id);
        }

        // POST: api/Survey_Types
        public void Post(Survey_Types survey_Types)
        {
            surveyTypeRepository.Add(survey_Types);

        }

        // PUT: api/Survey_Types/5
        public void Put(int id, Survey_Types survey_Types)
        {
            surveyTypeRepository.Update(survey_Types);
        }

        // DELETE: api/Survey_Types/5
        public void Delete(long id)
        {
            surveyTypeRepository.Delete(id);

        }
    }
}