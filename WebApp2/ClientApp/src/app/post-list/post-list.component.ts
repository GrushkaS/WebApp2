import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../models/post';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  providers: [DataService],
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post: Post = new Post();
  posts: Post[];
  tableMode: boolean = true;
  searchString = '';

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.loadPosts();  // загрузка данных при старте компонента
  }

  loadPosts() {
    this.dataService.getPosts()
      .subscribe((data: Post[]) => {this.posts = data; console.log(data); console.log(this.posts); });
    console.log(this.posts);
  }

  save() {
    if (this.post.id == null) {
      this.dataService.createPost(this.post)
        .subscribe((data: Post) => this.posts.push(data));
    } else {
      this.dataService.updatePost(this.post)
        .subscribe(data => this.loadPosts());
    }
    this.cancel();
  }
  editProduct(p: Post) {
    this.post = p;
  }

  cancel() {
    this.post = new Post();
    this.tableMode = true;
  }

  delete(p: Post) {
    this.dataService.deletePost(p.id)
      .subscribe(data => this.loadPosts());
  }
  add() {
    this.cancel();
    this.tableMode = false;
  }



}
