import { Component } from '@angular/core';
import { ComponentCanDeactivate} from '../../../services/exit.about.guard';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements ComponentCanDeactivate {
  saved: boolean = false;

  constructor(private router: Router) {
  }

  save() {
    this.saved = true;
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
