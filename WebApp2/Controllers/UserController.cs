using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp2.Model;
using Microsoft.AspNetCore.Mvc;

namespace WebApp2.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : Controller
    {
        ApplicationContext db;

        public UserController(ApplicationContext context)
        {
            db = context;
            
            if (!db.Users.Any())
            {
                db.Users.Add(new User {Name = "Vadim", Email = "admin@email.com", Password = "4044", Role = "admin" });
                db.SaveChanges();
            }
         
        }

        [HttpPost]
        public User IsUser(User user)
        {
            List<User> users = db.Users.ToList();
            User resUser = new User {Name = "ErrorUSer" };
            foreach(User _user in users)
            {
                if(_user.Name == user.Name && _user.Password == user.Password)
                {
                    resUser = _user;
                    break;
                }
                
            }

            return resUser;             
        }

        [HttpPost("create")]
        public IActionResult Post(User user)
        {
            if (ModelState.IsValid)
            {
                db.Users.Add(user);
                db.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        }

    }
}
