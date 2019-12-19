using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Prometheus.Data;
using Prometheus.Data.Models;

namespace Prometheus.Api.Controllers
{
    [Route("[controller]/[Action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {


        [HttpGet]
        public Task<List<Account>> GetAccounts()
        {
            return new Biz.AccountBiz().GetAccounts();
        }
    }
}