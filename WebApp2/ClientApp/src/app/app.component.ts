import { Component } from '@angular/core';
import {User} from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    localStorage.setItem('cr-user', 'unknown');
    localStorage.setItem('role-token', 'user');
  }
  user: User = new User();
  title = 'app';
}
