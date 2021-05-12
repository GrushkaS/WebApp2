using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp2.Model
{
    public class Comment
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Date { get; set; }
        public string Text { get; set; }
        public string PostNumber { get; set; }
        public string UserNumber { get; set; }
    }
}
