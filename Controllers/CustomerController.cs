using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Northwind.Models;

namespace Northwind.Controllers
{
    public class CustomerController : Controller
    {
        private INorthwindRepository _repository;

        public CustomerController(INorthwindRepository repository)
        {
            _repository = repository;
        }
        // GET: /<controller>/
        public IActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Register(Customer customer)
        {
            if (ModelState.IsValid)
            {
                _repository.AddCustomer(customer);
            }

            return RedirectToAction("Index", "Home");
        }
    }
}
