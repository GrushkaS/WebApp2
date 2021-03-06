import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Post} from '../../models/post';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'admin-app-post-add',
  templateUrl: './admin-post-add.component.html',
  providers: [DataService, DatePipe]
})
export class AdminPostAddComponent implements OnInit{
  post: Post = new Post();
  date: Date;
  currentUserId: string;

  constructor(private dataService: DataService, private router: Router, public datepipe: DatePipe) {
  }
ngOnInit() {
  this.currentUserId = localStorage.getItem('cr-user-id');
}

  save() {
    this.date = new Date();

    this.post.date = this.datepipe.transform(this.date, 'dd.MM.yyyy');
    this.post.author = localStorage.getItem('cr-user');
    this.post.userNumber = this.currentUserId;
    this.dataService.createPost(this.post).subscribe(data => this.router.navigateByUrl('/admin/posts-list'));

  }

}
