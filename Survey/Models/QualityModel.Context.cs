﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Survey.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class QualityEntities : DbContext
    {
        public QualityEntities()
            : base("name=QualityEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Client_Master> Client_Master { get; set; }
        public virtual DbSet<ClientDevice> ClientDevices { get; set; }
        public virtual DbSet<ClientType> ClientTypes { get; set; }
        public virtual DbSet<CommentsLog> CommentsLogs { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Form_Template_Design> Form_Template_Design { get; set; }
        public virtual DbSet<Form_Template_Master> Form_Template_Master { get; set; }
        public virtual DbSet<FormGeneric> FormGenerics { get; set; }
        public virtual DbSet<Priority> Priorities { get; set; }
        public virtual DbSet<Report_Template_Design> Report_Template_Design { get; set; }
        public virtual DbSet<Report_Template_Master> Report_Template_Master { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Service_Tickets> Service_Tickets { get; set; }
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<StatusReason> StatusReasons { get; set; }
        public virtual DbSet<Survey_Item_Master> Survey_Item_Master { get; set; }
        public virtual DbSet<Survey_Types> Survey_Types { get; set; }
        public virtual DbSet<SurveyLog> SurveyLogs { get; set; }
        public virtual DbSet<SyncData> SyncDatas { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}
