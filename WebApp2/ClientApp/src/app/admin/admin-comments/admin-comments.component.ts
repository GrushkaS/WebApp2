import {Component, DoCheck, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {DatePipe} from '@angular/common';
import {Comment} from '../../models/comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-post-comments',
  templateUrl: './admin-comments.component.html',
  providers: [CommentService, DatePipe],
  styleUrls: ['./admin-comments.component.css']
  })
export class AdminCommentsComponent implements OnInit, DoCheck {
  comment: Comment = new Comment();
  comments: Comment[];
  idPost: string;
  isEmptyComments = false;
  currentUser: string;
  editText: string;
  date: Date;
  currentUserId: string;
  isEdit = false;
  editId: number;

  constructor(private activeRoute: ActivatedRoute, private commentService: CommentService, private datepipe: DatePipe) {
    // tslint:disable-next-line:radix
    this.idPost = activeRoute.snapshot.params['id'];
    this.currentUserId = localStorage.getItem('cr-user-id');
  }

  ngDoCheck() {
    this.currentUser = localStorage.getItem('cr-user');
    this.currentUserId = localStorage.getItem('cr-user-id');
  }

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    // tslint:disable-next-line:max-line-length radix
    this.commentService.getComments(Number.parseInt(this.idPost)).subscribe((data: Comment[]) => {
      this.comments = data;
      if (this.comments.length !== 0) { this.isEmptyComments = true; }
      console.log('Boolean check: ' + this.isEmptyComments);
      console.log('Data check: ' + data);
      console.log('Comments check ' + this.comments); });

  }

  delete(id: number) {
    this.commentService.deleteComment(id).subscribe(data => this.loadComments());
  }

  save() {
    this.comment = new Comment();
    this.date = new Date();
    this.comment.author = this.currentUser;
    this.comment.postNumber = this.idPost;
    this.comment.userNumber = this.currentUserId;
    this.comment.date = this.datepipe.transform(this.date, 'dd.MM.yyyy hh:mm a');
    this.comment.text = this.editText;
    console.log('Ready for creating com post number = ' + this.idPost + ' id user ' + this.currentUserId);
    console.log(this.comment);

    this.commentService.createComment(this.comment).subscribe(data => this.loadComments());
  }

  edit(id: number) {
    this.isEdit = true;
    this.editId = id;
    this.commentService.getComment(id).subscribe((data: Comment) => {
      this.comment = data;
      this.editText = this.comment.text;
      console.log(this.comment);
    });
  }

  cancel() {
    this.isEdit = false;
    this.editId = null;
  }

  saveCom(id: number) {
    this.commentService.getComment(id).subscribe((data: Comment) => {this.comment = data; });
    this.comment.date = this.datepipe.transform(this.date, 'dd.MM.yyyy hh:mm a');
    this.comment.text = this.editText;
    this.commentService.updateComment(this.comment).subscribe(data => this.loadComments());
    this.cancel();
  }

}
