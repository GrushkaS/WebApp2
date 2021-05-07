import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable()
export class AuthGuardAdmin implements CanActivate {
  constructor(private auth: LoginService, private  router: Router ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.auth.isLogged()) {
      return true;
    } else { return false; }
  }
}
