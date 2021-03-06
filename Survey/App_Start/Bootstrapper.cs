﻿using Microsoft.Practices.Unity;
 
//using Survey.Data.Repositories;
//using Survey.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Survey.Models;

namespace Survey
{
    public static class Bootstrapper
    {
        public static void Initialise()
        {
            var container = BuildUnityContainer();
            GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
        }

        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();
            //register the Address Repository
            container.RegisterType<IRepository<Role>, RoleRepository>();
            container.RegisterType<IRepository<User>, UserRepository>();
            container.RegisterType<IRepository<Team>, TeamRepository>();
            container.RegisterType<IRepository<Client_Master>, ClientRepository>();
            container.RegisterType<IRepository<Department>, DepartmentRepository>();
            container.RegisterType<IRepository<ClientType>, ClientTypeRepository>();
            container.RegisterType<IRepository<Priority>, PriorityRepository>();
            container.RegisterType<IRepository<Status>, StatusRepository>();
            container.RegisterType<IRepository<StatusReason>, StatusReasonRepository>();
            container.RegisterType<IRepository<Service_Tickets>, ServiceTicketRepository>();
            container.RegisterType<IRepository<ClientType>, ClientTypeRepository>();
            container.RegisterType<IRepository<Survey_Types>, SurveyTypeRepository>();
            //container.RegisterType<IRepository<Survey.Data.Entities.Department>, DepartmentRepository>();
            //container.RegisterType<IRepository<Survey.Data.Entities.Role>, RoleRepository>();
            //container.RegisterType<IRepository<User>, UserRepository>();
            //container.RegisterType<IRepository<Client>, ClientRepository>();
            //container.RegisterType<IRepository<Status>, StatusRepository>();
            //container.RegisterType<IRepository<Team>, TeamRepository>();
            //container.RegisterType<IRepository<StatusReason>, StatusReasonRepository>();
            //container.RegisterType<IRepository<ServiceTicket>, ServiceTicketRepository>();
            //container.RegisterType<IRepository<SurveyType>, SurveyTypeRepository>();
            //container.RegisterType<IRepository<ClientType>, Survey.Data.Entities.ClientTypeRepository>();
            return container;
        }
    }
}