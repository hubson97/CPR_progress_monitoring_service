using CPR_progress_monitoring_service.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CPR_progress_monitoring_service.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<Measurement> Measurements { get; set; }
        public DbSet<UserGroup> UserGroups { get; set; }

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Measurement>()
                .HasOne(n => n.ApplicationUser)
                .WithMany(a => a.Measurements)
                .OnDelete(DeleteBehavior.NoAction);

            builder.Entity<ApplicationUser>()
                .HasOne(n => n.UserGroup)
                .WithMany(a => a.ApplicationUsers)
                .OnDelete(DeleteBehavior.NoAction);

            //builder.Entity<Measurement>().HasNoKey()
            //    .HasOne(n => n.ApplicationUser)
            //    .WithMany(a => a.Measurements)
            //    .HasForeignKey(n => n.UserID)
            //    .IsRequired()
            //    .OnDelete(DeleteBehavior.NoAction);


            base.OnModelCreating(builder);
        }



    }
}
