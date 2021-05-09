import { Component } from '@angular/core';
import { ComponentCanDeactivate} from '../../../services/exit.about.guard';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [LoginService]
})
export class SignUpComponent implements ComponentCanDeactivate {
  saved: boolean = false;

  user: User = new User();

  constructor(private router: Router, private loginService: LoginService) {
  }

  save() {
    this.saved = true;
  }

  signUp() {
    this.user.role = 'user';
    this.loginService.signUp(this.user).subscribe(data => this.router.navigateByUrl('/log-in'));
    this.save();
    confirm('User created! Now you can login into system.');
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('You have unsaved data. Do you really want to leave the page?');
    } else {
      return true;
    }
  }

  goHome() {
    this.save();
    this.router.navigate(['']);
  }

}
