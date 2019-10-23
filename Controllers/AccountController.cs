using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Northwind.Models;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;

namespace Northwind.Controllers
{
    public class AccountController : Controller
    {
        private UserManager<AppUser> _userManager;
        private SignInManager<AppUser> _signInManager;

        public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public IActionResult Login(string returnUrl)
        {
            ViewBag.returnUrl = returnUrl;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginModel login, string returnUrl)
        {
            
            if (ModelState.IsValid)
            {
                AppUser user = await _userManager.FindByEmailAsync(login.Email);
                if (user != null)
                {
                    await _signInManager.SignOutAsync();

                    SignInResult result = await _signInManager.PasswordSignInAsync(user, login.Password, false, false);
                    if (result.Succeeded)
                    {
                        //return redirect
                        return Redirect(returnUrl ?? "/");
                    }
                    ModelState.AddModelError("", "Invalid Username or Password.");
                    
                }

            }
            return View(login);
        }

        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}