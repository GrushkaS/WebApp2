import {Component, Input} from '@angular/core';
import {Post} from '../../models/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent {
  @Input() post: Post;
}
