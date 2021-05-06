import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {Post} from '../../models/post';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'admin-app-post-add',
  templateUrl: './admin-post-add.component.html',
  providers: [DataService, DatePipe]
})
export class AdminPostAddComponent {
  post: Post = new Post();
  date: Date;

  constructor(private dataService: DataService, private router: Router, public datepipe: DatePipe) {
  }

  save() {
    this.date = new Date();

    this.post.date = this.datepipe.transform(this.date, 'dd.MM.yyyy');
    this.dataService.createPost(this.post).subscribe(data => this.router.navigateByUrl('/admin/posts-list'));

  }

}
