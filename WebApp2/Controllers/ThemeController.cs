using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp2.Model;
using Microsoft.AspNetCore.Mvc;

namespace WebApp2.Controllers
{
    [ApiController]
    [Route("api/themes")]
    public class ThemeController: Controller
    {
        ApplicationContext db;
        public ThemeController(ApplicationContext context)
        {
            db = context;

            if (!db.Themes.Any())
            {
                db.Themes.Add(new Theme { Title = "C# test", Text = "Console.WriteLine('Hello world')", Date = "04.05.2021", idTheme = 1 });
                db.Themes.Add(new Theme { Title = "C# module", Text = "string name;", Date = "12.05.2021", idTheme = 1 });
                db.Themes.Add(new Theme { Title = "Angular module", Text = "@NgModule", Date = "13.05.2021", idTheme = 2 });
                db.SaveChanges();
            }
        }

        [HttpGet("t/{id}")]
        public IEnumerable<Theme> Get(int id)
        {
            List<Theme> themes = db.Themes.ToList();
            List<Theme> resthemes = new List<Theme>();
            foreach(Theme t in themes)
            {
                if(t.idTheme == id)
                {
                    resthemes.Add(t);
                }
            }
            return resthemes;
        }

        [HttpGet("{id}")]
        public Theme GetTheme(int id)
        {
            return db.Themes.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IActionResult Post(Theme theme)
        {
            if (ModelState.IsValid)
            {
                db.Themes.Add(theme);
                db.SaveChanges();
                return Ok(theme);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Theme theme)
        {
            if (ModelState.IsValid)
            {
                db.Update(theme);
                db.SaveChanges();
                return Ok(theme);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Theme theme = db.Themes.FirstOrDefault(x => x.Id == id);
            if (theme != null)
            {
                db.Themes.Remove(theme);
                db.SaveChanges();
            }
            return Ok(theme);
        }

    }
}
