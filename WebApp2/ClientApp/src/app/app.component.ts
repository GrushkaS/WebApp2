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
    localStorage.setItem('cr-user-id', '0');
  }
  user: User = new User();
  title = 'app';
}
