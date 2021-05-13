import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';
import {User} from '../../../models/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [LoginService]
})
export class LogInComponent implements OnInit {
  @Input() user: User = new User();

  form: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {this.form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3)])
  });
  }

  logIn() {
    this.loginService.isUser(this.user)
      .subscribe((data: User) => {this.user = data; console.log(data); console.log(this.user); this.loginService.logIn(this.user);  });
  }




  goHome() {
    this.router.navigate(['']);
  }
}
