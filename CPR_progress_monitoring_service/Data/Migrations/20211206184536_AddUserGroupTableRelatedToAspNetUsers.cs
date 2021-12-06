using Microsoft.EntityFrameworkCore.Migrations;

namespace CPR_progress_monitoring_service.Data.Migrations
{
    public partial class AddUserGroupTableRelatedToAspNetUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserGroup_UserGroupsGroupID",
                table: "AspNetUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserGroup",
                table: "UserGroup");

            migrationBuilder.RenameTable(
                name: "UserGroup",
                newName: "UserGroups");

            migrationBuilder.RenameColumn(
                name: "UserGroupsGroupID",
                table: "AspNetUsers",
                newName: "UserGroupGroupID");

            migrationBuilder.RenameIndex(
                name: "IX_AspNetUsers_UserGroupsGroupID",
                table: "AspNetUsers",
                newName: "IX_AspNetUsers_UserGroupGroupID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserGroups",
                table: "UserGroups",
                column: "GroupID");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserGroups_UserGroupGroupID",
                table: "AspNetUsers",
                column: "UserGroupGroupID",
                principalTable: "UserGroups",
                principalColumn: "GroupID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_UserGroups_UserGroupGroupID",
                table: "AspNetUsers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserGroups",
                table: "UserGroups");

            migrationBuilder.RenameTable(
                name: "UserGroups",
                newName: "UserGroup");

            migrationBuilder.RenameColumn(
                name: "UserGroupGroupID",
                table: "AspNetUsers",
                newName: "UserGroupsGroupID");

            migrationBuilder.RenameIndex(
                name: "IX_AspNetUsers_UserGroupGroupID",
                table: "AspNetUsers",
                newName: "IX_AspNetUsers_UserGroupsGroupID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserGroup",
                table: "UserGroup",
                column: "GroupID");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_UserGroup_UserGroupsGroupID",
                table: "AspNetUsers",
                column: "UserGroupsGroupID",
                principalTable: "UserGroup",
                principalColumn: "GroupID");
        }
    }
}
