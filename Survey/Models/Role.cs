//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class Role
    {
        public int Role_ID { get; set; }
        public string Role_Name { get; set; }
        public string Role_Description { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public Nullable<System.DateTime> Created_On { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<System.DateTime> Updated_On { get; set; }
        public Nullable<int> Updated_By { get; set; }
    }
}
