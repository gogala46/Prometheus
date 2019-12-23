using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Prometheus.Biz;
using Prometheus.Data;
using Prometheus.Data.Models;

namespace Prometheus.Api.Controllers
{
    [Route("[controller]/[Action]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        //private 
        private readonly DataContext _x;
        public AccountController(DataContext x)
        {
            _x = x;
        }

        [HttpGet]
        public Task<List<Account>> GetAccounts()
        {
            return new Biz.AccountBiz(_x).GetAccounts();
        }

        public Task<bool> AddAccount(Account acc)
        {
            return new Biz.AccountBiz(_x).AddAccount(acc);
        }

        public Task<bool> RemoveAccount(int id)
        {
            return new Biz.AccountBiz(_x).RemoveAccount(id);
        }


        public void UpdateAccount(Account acc)
        {
             new Biz.AccountBiz(_x).UpdateAccount(acc);
        }



        

    }
}