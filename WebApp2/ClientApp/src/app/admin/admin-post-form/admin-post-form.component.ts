import {Component, Input} from '@angular/core';
import { Post} from '../../models/post';

@Component({
  selector: 'admin-app-post-form',
  templateUrl: './admin-post-form.component.html'
})
export class AdminPostFormComponent {
  @Input() post: Post;
}
