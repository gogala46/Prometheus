using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Data.Migrations
{
    public partial class ola : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ola",
                table: "Accounts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ola",
                table: "Accounts");
        }
    }
}
