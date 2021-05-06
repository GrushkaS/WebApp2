import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-admin-post-view',
  templateUrl: './admin-post-view.component.html',
  providers: [DataService],
  styleUrls: ['./admin-post-view.component.css']
})
export class AdminPostViewComponent implements  OnInit {
  post: Post = new Post();
  id: number;

  pageYOffset = 0;
  @HostListener('window:scroll', ['event']) onScroll(event) {
    this.pageYOffset = window.pageYOffset;
  }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }


  constructor(private dataService: DataService, private router: Router, activeRoute: ActivatedRoute, private scroll: ViewportScroller) {
    // tslint:disable-next-line:radix
    this.id = Number.parseInt(activeRoute.snapshot.params['id']);
  }

  ngOnInit() {
    this.loadPost();  // загрузка данных при старте компонента
  }

  loadPost() {
    if (this.id) {
      this.dataService.getPost(this.id)
        .subscribe((data: Post) => {
          this.post = data;
        });
    }
  }

  goPostsList() {
    this.router.navigate(['/admin/posts-list']);
  }

}
