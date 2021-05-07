import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {
  private url = '/api/users';

  constructor(private http: HttpClient, private router: Router) {
  }

  isUser(user: User) {
    return this.http.post(this.url, user);
  }

  logIn(user: User) {
    if (user.role === 'admin') {
      this.router.navigate(['/admin']);
      localStorage.setItem('role-token', 'admin');
    } else {
      this.router.navigate(['']);
      localStorage.setItem('role-token', 'user');
    }
  }

  logOut() {
    localStorage.setItem('role-token', 'user');
  }

  isLogged() {
    if (localStorage.getItem('role-token') === 'admin') {
      return true;
    } else {
      return false;
    }
  }

}
