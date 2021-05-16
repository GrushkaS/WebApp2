using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp2.Model;
using Microsoft.AspNetCore.Mvc;

namespace WebApp2.Controllers
{
    [ApiController]
    [Route("api/themesn")]
    public class ThemeNController: Controller
    {
        ApplicationContext db;

        public ThemeNController(ApplicationContext context)
        {
            db = context;
            if (!db.ThemesN.Any())
            {
                db.ThemesN.Add(new ThemeN {Title = "C#" });
                db.ThemesN.Add(new ThemeN {Title = "Angular" });
                db.SaveChanges();
            }

        }

        [HttpGet]
        public IEnumerable<ThemeN> Get()
        {
            return db.ThemesN.ToList();
        }

        [HttpPost]
        public IActionResult Post(ThemeN theme)
        {
            if (ModelState.IsValid)
            {
                db.ThemesN.Add(theme);
                db.SaveChanges();
                return Ok(theme);
            }
            return BadRequest(ModelState);
        }

    }
}
