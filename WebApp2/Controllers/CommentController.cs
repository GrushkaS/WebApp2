using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp2.Model;
using Microsoft.AspNetCore.Mvc;

namespace WebApp2.Controllers
{
    [ApiController]
    [Route("api/comments")]
    public class CommentController: Controller
    {
        ApplicationContext db;
        public CommentController(ApplicationContext context)
        {
            db = context;

            if (!db.Comments.Any())
            {
                db.Comments.Add(new Comment { Author = "Admin", Date = "6 may 2021 18:40", Text = "Hello world!"});
                db.SaveChanges();
            }
       
        }

        [HttpGet]
        public IEnumerable<Comment> Get()
        {
            return db.Comments.ToList();
        }

        [HttpGet("{id}")]
        public Comment Get(int id)
        {
            return db.Comments.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            if (ModelState.IsValid)
            {
                db.Comments.Add(comment);
                db.SaveChanges();
                return Ok(comment);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Comment comment)
        {
            if (ModelState.IsValid)
            {
                db.Update(comment);
                db.SaveChanges();
                return Ok(comment);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Comment comment = db.Comments.FirstOrDefault(x => x.Id == id);
            if (comment != null)
            {
                db.Comments.Remove(comment);
                db.SaveChanges();
            }
            return Ok(comment);
        }
    }
}
