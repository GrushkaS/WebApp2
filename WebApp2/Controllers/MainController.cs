using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp2.Model;
using Microsoft.AspNetCore.Mvc;

namespace WebApp2.Controllers
{
    [ApiController]
    [Route("api/posts")]
    public class MainController : Controller
    {
        ApplicationContext db;
        public MainController(ApplicationContext context)
        {
            db = context;
          
            if (!db.Posts.Any())
            {
                db.Posts.Add(new Post { Title = "C#", Text = "Console.WriteLine('Hello world')", Author = "Admin", Date = "04.05.2021" });
                db.Posts.Add(new Post { Title = "C#", Text = "Using System;", Author = "Admin", Date = "05.05.2021" });
                db.Posts.Add(new Post { Title = "Angular", Text = "Сам фреймворк состоит из нескольких библиотек (или модулей), каждая из которых содержит в себе определенный функционал, а каждый модуль состоит из совокупности классов и их свойств и методов.Каждый класс имеет свое функциональное предназначение.Не все библиотеки обязательны для использования в приложении(англ.Angular App), часть подключается по мере необходимости,например,FormsModule или HttpClientModule.", Author = "Admin", Date = "05.05.2021" });
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return db.Posts.ToList();
        }

        [HttpGet("{id}")]
        public Post Get(int id)
        {
            return db.Posts.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            if (ModelState.IsValid)
            {
                db.Posts.Add(post);
                db.SaveChanges();
                return Ok(post);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Post post)
        {
            if (ModelState.IsValid)
            {
                db.Update(post);
                db.SaveChanges();
                return Ok(post);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Post post = db.Posts.FirstOrDefault(x => x.Id == id);
            if (post != null)
            {
                db.Posts.Remove(post);
                db.SaveChanges();
            }
            return Ok(post);
        }

    }
}
