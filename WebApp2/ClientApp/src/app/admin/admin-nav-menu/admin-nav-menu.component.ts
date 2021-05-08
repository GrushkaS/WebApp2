import {Component, DoCheck} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-admin-nav-menu',
  templateUrl: './admin-nav-menu.component.html',
  styleUrls: ['./admin-nav-menu.component.css'],
  providers: [LoginService]
})
export class AdminNavMenuComponent implements DoCheck {
  isExpanded = false;
  currentUser = '';


  constructor(private router: Router, activeRoute: ActivatedRoute, private loginService: LoginService) {
    console.log('Active url: ' + activeRoute.toString());
  }

  ngDoCheck() {
    this.currentUser = localStorage.getItem('cr-user');
  }

  logOut() {
    this.loginService.logOut();
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
