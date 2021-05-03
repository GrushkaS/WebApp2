using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp2.Model;
using Microsoft.AspNetCore.Mvc;

namespace WebApp2.Controllers
{
    [ApiController]
    [Route("posts")]
    public class MainController: Controller
    {
        ApplicationContext db;
        public MainController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return db.Posts.ToList();
        }

        [HttpGet("{id}")]
        public Post Get(int id)
        {
            return db.Posts.FirstOrDefault(x => x.Id==id);
        }
    }
}
