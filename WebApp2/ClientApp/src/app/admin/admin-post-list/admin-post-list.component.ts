import {Component, HostListener} from '@angular/core';
import { Post} from '../../models/post';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'admin-app-post-list',
  templateUrl: './admin-post-list.component.html',
  styleUrls: ['./admin-post-list.component.css'],
  providers: [DataService]
})
export class AdminPostListComponent {

  post: Post = new Post();
  posts: Post[];
  searchString: string;

  pageYOffset = 0;
  @HostListener('window:scroll', ['event']) onScroll(event) {
    this.pageYOffset = window.pageYOffset;
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  constructor(private dataService: DataService, private router: Router, private scroll: ViewportScroller) { }

  ngOnInit() {
    this.loadPosts();  // загрузка данных при старте компонента
  }

  loadPosts() {
    this.dataService.getPosts()
      .subscribe((data: Post[]) => {this.posts = data; console.log(data); console.log(this.posts); });
    console.log(this.posts);
  }

  load() {
    this.dataService.getPosts().subscribe((data: Post[]) => this.posts = data);
  }

  delete(id: number) {
    this.dataService.deletePost(id).subscribe(data => this.load());
  }

  goAdd() {
    this.router.navigate(['/admin/posts-list/add']);
  }
}
