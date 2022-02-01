using CPR_progress_monitoring_service.Constants;
using CPR_progress_monitoring_service.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPR_progress_monitoring_service.Data
{
    public class ApplicationDbContextSeed
    {
        public static async Task SeedEssentialsAsync(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            //Seed Roles
            //await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.administrator.ToString()));
            //await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.instructor.ToString()));
            //await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.user.ToString()));
            await roleManager.CreateAsync(new IdentityRole(Authorization.Roles.student.ToString()));
            //Seed Default User
            //var defaultUser = new ApplicationUser { UserName = Authorization.default_username, Email = Authorization.default_email, EmailConfirmed = true, PhoneNumberConfirmed = true };
            var studentUser = new ApplicationUser { UserName = "student", Email = "student@cprservice.com", EmailConfirmed = true, PhoneNumberConfirmed = true };
            //var instructorUser = new ApplicationUser { UserName = "instruktor", Email = "instruktor@cprservice.com", EmailConfirmed = true, PhoneNumberConfirmed = true };
            //var adminUser = new ApplicationUser { UserName = "admin", Email = "admin@cprservice.com", EmailConfirmed = true, PhoneNumberConfirmed = true };

            if (userManager.Users.All(u => u.Id != studentUser.Id))
            {
                await userManager.CreateAsync(studentUser, Authorization.default_password);
                await userManager.AddToRoleAsync(studentUser, Authorization.default_role.ToString());
            }
            //if (userManager.Users.All(u => u.Id != instructorUser.Id))
            //{
            //    await userManager.CreateAsync(instructorUser, Authorization.default_password);
            //    await userManager.AddToRoleAsync(instructorUser, Authorization.Roles.instructor.ToString());
            //}
            //if (userManager.Users.All(u => u.Id != adminUser.Id))
            //{
            //    await userManager.CreateAsync(adminUser, Authorization.default_password);
            //    await userManager.AddToRoleAsync(adminUser, Authorization.Roles.idministrator.ToString());
            //}
        }
    }
}
