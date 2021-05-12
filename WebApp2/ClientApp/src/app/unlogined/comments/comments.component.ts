import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/comment';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-post-comments',
  templateUrl: './comments.component.html',
  providers: [CommentService, DatePipe],
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, DoCheck {
  comment: Comment = new Comment();
  comments: Comment[];
  idPost: string;
  isEmptyComments = false;
  date: Date;
  currentUser: string;
  currentUserId: string;


  constructor(private activeRoute: ActivatedRoute, private commentService: CommentService, private datepipe: DatePipe) {
    // tslint:disable-next-line:radix
    this.idPost = activeRoute.snapshot.params['id'];
    // tslint:disable-next-line:radix
    this.currentUserId = localStorage.getItem('cr-user-id');
  }

  ngDoCheck() {
    this.currentUser = localStorage.getItem('cr-user');
    // tslint:disable-next-line:radix
    this.currentUserId = localStorage.getItem('cr-user-id');
  }

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    // tslint:disable-next-line:max-line-length radix
    this.commentService.getComments(Number.parseInt(this.idPost)).subscribe((data: Comment[]) => {this.comments = data; if (this.comments.length !== 0) { this.isEmptyComments = true; } console.log('Boolean check: ' + this.isEmptyComments); console.log('Data check: ' + data); console.log('Comments check ' + this.comments); });

  }

  save() {
    this.date = new Date();
    this.comment.author = this.currentUser;
    this.comment.postNumber = this.idPost;
    this.comment.userNumber = this.currentUserId;
    this.comment.date = this.datepipe.transform(this.date, 'dd.MM.yyyy hh:mm a');
    console.log('Ready for creating com post number = ' + this.idPost + ' id user ' + this.currentUserId);
    console.log(this.comment);
    this.commentService.createComment(this.comment).subscribe(data => this.loadComments());
  }

}
