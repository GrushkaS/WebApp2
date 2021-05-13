import {Component, OnInit} from '@angular/core';
import { DataService} from '../../services/data.service';
import { Post} from '../../models/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  providers: [DataService]
})
export class PostEditComponent implements OnInit {
  id: number;
  post: Post;
  constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute) {
    this.id = Number.parseInt(activeRoute.snapshot.params['id']);
  }

  ngOnInit() {
    if (this.id) {
      this.dataService.getPost(this.id)
        .subscribe((data: Post) => {
          this.post = data;
        });
    }
  }

  save() {
    this.dataService.updatePost(this.post).subscribe(data => this.router.navigateByUrl('/posts-list/' + this.id));
  }


}
