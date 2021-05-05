import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-nav-menu',
  templateUrl: './admin-nav-menu.component.html',
  styleUrls: ['./admin-nav-menu.component.css']
})
export class AdminNavMenuComponent {
  isExpanded = false;


  constructor(private router: Router, activeRoute: ActivatedRoute) {
    console.log('Active url: ' + activeRoute.toString());
  }

  goHome() {
    this.router.navigate(['']);
  }

  // goPosts() {
  //   this.router.navigate(['/posts-list']);
  // }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
