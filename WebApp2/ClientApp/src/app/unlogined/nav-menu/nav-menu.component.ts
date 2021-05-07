import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [LoginService]
})
export class NavMenuComponent {
  isExpanded = false;
  isAdminLayout = false;

  currentUser: string;
  unknownUser = 'unknown';



  constructor(private router: Router, activeRoute: ActivatedRoute, private loginService: LoginService) {
    console.log('Active url: ' + activeRoute.toString());
    this.currentUser = localStorage.getItem('cr-user');
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['']);
  }

  goHome() {
    this.router.navigate(['']);
  }

  goPosts() {
    this.router.navigate(['/posts-list']);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
