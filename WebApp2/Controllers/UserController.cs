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
            db.Users.Add(new User { Name = "User", Email = "user@email.com", Password = "4044", Role = "user" });
            db.SaveChanges();

            if (!db.Users.Any())
            {
                db.Users.Add(new User {Name = "GrushkaS", Email = "vad@email.com", Password = "4044", Role = "admin" });
                db.SaveChanges();
            }
         
        }

        [HttpPost]
        public User IsUser(User user)
        {
            User userm = db.Users.FirstOrDefault(x => x.Name == user.Name);
            if (userm != null)
            {
                return userm;
            }
            else
            {
                return new User();
            }           
        }

        //[HttpGet]
        //public IEnumerable<User> Get()
        //{
        //    return db.Users.ToList();
        //}

    }
}
