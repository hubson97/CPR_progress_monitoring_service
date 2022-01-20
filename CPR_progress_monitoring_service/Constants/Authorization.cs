using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPR_progress_monitoring_service.Constants
{
    public class Authorization
    {
        public enum Roles
        {
            administrator,
            instructor,
            student
            //user
        }


        public const string default_username = "student";
        public const string default_email = "student@cprservice.com";
        public const string default_password = "zaq1@WSX";
        public const Roles default_role = Roles.student;
        
    }
}
