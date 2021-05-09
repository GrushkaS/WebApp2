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
                db.Comments.Add(new Comment { Author = "admin", PostNumber = 1, UserNumber = 1, Date = "05.05.2020 18:38", Text = "Hello first comment" });
                db.SaveChanges();
            }
        }

        [HttpGet("p/{id}")]
        public IEnumerable<Comment> Get(int id)
        {
            List<Comment> comments = db.Comments.ToList();
            List<Comment> rescomments = new List<Comment>();        
            foreach (Comment comment in comments)
            {
                if (comment.PostNumber == id)
                {
                    rescomments.Add(comment);
                }

            }

            return rescomments;
        }

        [HttpGet("{id}")]
        public Comment GetComment(int id)
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
