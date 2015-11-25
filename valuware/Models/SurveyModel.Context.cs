﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace valuware.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class SurveyEntities : DbContext
    {
        public SurveyEntities()
            : base("name=SurveyEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Form_Template_Design> Form_Template_Design { get; set; }
        public virtual DbSet<Form_Template_Master> Form_Template_Master { get; set; }
        public virtual DbSet<Service_Tickets> Service_Tickets { get; set; }
    
        public virtual int getFormDesignData(string referenceNumber)
        {
            var referenceNumberParameter = referenceNumber != null ?
                new ObjectParameter("ReferenceNumber", referenceNumber) :
                new ObjectParameter("ReferenceNumber", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("getFormDesignData", referenceNumberParameter);
        }
    
        public virtual int submitFormData(string refNumber, string tableName, string fieldNames, string values, string setString)
        {
            var refNumberParameter = refNumber != null ?
                new ObjectParameter("refNumber", refNumber) :
                new ObjectParameter("refNumber", typeof(string));
    
            var tableNameParameter = tableName != null ?
                new ObjectParameter("tableName", tableName) :
                new ObjectParameter("tableName", typeof(string));
    
            var fieldNamesParameter = fieldNames != null ?
                new ObjectParameter("fieldNames", fieldNames) :
                new ObjectParameter("fieldNames", typeof(string));
    
            var valuesParameter = values != null ?
                new ObjectParameter("Values", values) :
                new ObjectParameter("Values", typeof(string));
    
            var setStringParameter = setString != null ?
                new ObjectParameter("setString", setString) :
                new ObjectParameter("setString", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("submitFormData", refNumberParameter, tableNameParameter, fieldNamesParameter, valuesParameter, setStringParameter);
        }
    
        public virtual int saveFormData(string refNumber, string tableName, string fieldNames, string values, string setString)
        {
            var refNumberParameter = refNumber != null ?
                new ObjectParameter("refNumber", refNumber) :
                new ObjectParameter("refNumber", typeof(string));
    
            var tableNameParameter = tableName != null ?
                new ObjectParameter("tableName", tableName) :
                new ObjectParameter("tableName", typeof(string));
    
            var fieldNamesParameter = fieldNames != null ?
                new ObjectParameter("fieldNames", fieldNames) :
                new ObjectParameter("fieldNames", typeof(string));
    
            var valuesParameter = values != null ?
                new ObjectParameter("Values", values) :
                new ObjectParameter("Values", typeof(string));
    
            var setStringParameter = setString != null ?
                new ObjectParameter("setString", setString) :
                new ObjectParameter("setString", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("saveFormData", refNumberParameter, tableNameParameter, fieldNamesParameter, valuesParameter, setStringParameter);
        }
    
        public virtual ObjectResult<getSurveyLeadListing_Result> getSurveyLeadListing()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<getSurveyLeadListing_Result>("getSurveyLeadListing");
        }
    
        public virtual ObjectResult<getSurveyListing_Result> getSurveyListing()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<getSurveyListing_Result>("getSurveyListing");
        }
    }
}
