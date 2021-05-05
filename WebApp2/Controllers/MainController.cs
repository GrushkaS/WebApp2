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
                db.Posts.Add(new Post { Title = "C#", Text = "Console.WriteLine('Hello world')", Author = "Admin" });
                db.Posts.Add(new Post { Title = "C#", Text = "Using System;", Author = "Admin" });
                db.Posts.Add(new Post { Title = "Angular", Text = "@Injectable", Author = "Admin" });
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
