import { Component } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post-comments',
  templateUrl: './comments.component.html',
  providers: [DataService]
})
export class CommentsComponent {
  post: Post = new Post();
  id: number;
}
