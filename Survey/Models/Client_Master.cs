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
    
    public partial class Client_Master
    {
        public int Client_ID { get; set; }
        public string Client_Name { get; set; }
        public string Client_Code { get; set; }
        public string Contact_FirstName { get; set; }
        public string Contact_LastName { get; set; }
        public string Contact_Email { get; set; }
        public string Address { get; set; }
        public string Client_Location { get; set; }
        public string Room_Number { get; set; }
        public string Phone { get; set; }
        public string Alternate_Phone { get; set; }
        public string Landline_Number { get; set; }
        public string Fax { get; set; }
        public Nullable<byte> Client_Type { get; set; }
        public string Notes { get; set; }
        public string Comments { get; set; }
        public Nullable<System.DateTime> Created_On { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<System.DateTime> Updated_On { get; set; }
        public Nullable<int> Updated_By { get; set; }
    }
}
