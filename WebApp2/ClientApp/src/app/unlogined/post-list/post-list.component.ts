import {Component, HostListener, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  providers: [DataService],
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post: Post = new Post();
  posts: Post[];
  searchString = '';

  currentUserId: string;
  currentUser: string;

  pageYOffset = 0;
  @HostListener('window:scroll', ['event']) onScroll(event) {
    this.pageYOffset = window.pageYOffset;
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }


  constructor(private dataService: DataService, private router: Router, private scroll: ViewportScroller) { }

  ngOnInit() {
    this.loadPosts();
    this.currentUserId = localStorage.getItem('cr-user-id');
    this.currentUser = localStorage.getItem('cr-user');
  }

  loadPosts() {
    this.dataService.getPosts()
      .subscribe((data: Post[]) => {this.posts = data; console.log(data); console.log(this.posts); });
  }

  delete(id: number) {
    this.dataService.deletePost(id).subscribe(data => this.loadPosts());
  }

  goAdd() {
    this.router.navigate(['/posts-list/add']);
  }

}
