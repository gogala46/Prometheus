using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Data.Migrations
{
    public partial class olaa : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ola",
                table: "Accounts");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ola",
                table: "Accounts",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
