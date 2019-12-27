using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Data.Migrations
{
    public partial class orgorgbankaccorgphone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Organizations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(nullable: true),
                    IdCode = table.Column<string>(nullable: true),
                    ExchequerCode = table.Column<string>(nullable: true),
                    Index = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Street = table.Column<string>(nullable: true),
                    FirstPerson = table.Column<string>(nullable: true),
                    SecondPerson = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Organizations", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "OrganizationBankAccs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BankAccId = table.Column<int>(nullable: false),
                    Account = table.Column<string>(nullable: true),
                    OrganizationId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrganizationBankAccs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrganizationBankAccs_bankAccs_BankAccId",
                        column: x => x.BankAccId,
                        principalTable: "bankAccs",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrganizationBankAccs_Organizations_OrganizationId",
                        column: x => x.OrganizationId,
                        principalTable: "Organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrganizationPhones",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    OrganizatinId = table.Column<int>(nullable: false),
                    organizationId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrganizationPhones", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrganizationPhones_Organizations_organizationId",
                        column: x => x.organizationId,
                        principalTable: "Organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrganizationBankAccs_BankAccId",
                table: "OrganizationBankAccs",
                column: "BankAccId");

            migrationBuilder.CreateIndex(
                name: "IX_OrganizationBankAccs_OrganizationId",
                table: "OrganizationBankAccs",
                column: "OrganizationId");

            migrationBuilder.CreateIndex(
                name: "IX_OrganizationPhones_organizationId",
                table: "OrganizationPhones",
                column: "organizationId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrganizationBankAccs");

            migrationBuilder.DropTable(
                name: "OrganizationPhones");

            migrationBuilder.DropTable(
                name: "Organizations");
        }
    }
}
