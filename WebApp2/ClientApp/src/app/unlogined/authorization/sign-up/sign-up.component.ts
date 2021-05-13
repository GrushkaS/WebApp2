import {Component, DoCheck, OnInit} from '@angular/core';
import { ComponentCanDeactivate} from '../../../services/exit.about.guard';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';
import {User} from '../../../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [LoginService]
})
export class SignUpComponent implements ComponentCanDeactivate, OnInit {
  saved: boolean = false;

  user: User = new User();

  form: FormGroup;


  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(this.user.password)]),
      username: new FormControl(null, [Validators.required])
    });
  }


  // submit() {
  //   return;
  // }

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
