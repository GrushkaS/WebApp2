import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-post-comments',
  templateUrl: './comments.component.html',
  providers: [CommentService]
})
export class CommentsComponent implements OnInit {
  comment: Comment = new Comment();
  comments: Comment[];
  idPost: number;
  isEmptyComments = false;

  constructor(private activeRoute: ActivatedRoute, private commentService: CommentService) {
    // tslint:disable-next-line:radix
    this.idPost = Number.parseInt(activeRoute.snapshot.params['id']);
    console.log('Parse int ' + this.idPost);
  }

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    // tslint:disable-next-line:max-line-length
    this.commentService.getComments(this.idPost).subscribe((data: Comment[]) => {this.comments = data; if (this.comments.length !== 0) { this.isEmptyComments = true; } console.log('Boolean check: ' + this.isEmptyComments); console.log('Data check: ' + data); });

  }
}
