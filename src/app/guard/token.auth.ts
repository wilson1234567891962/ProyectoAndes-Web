import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {LoginService} from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenAuth implements CanActivate {
  constructor(private router:Router, private loginService: LoginService,){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    if(this.loginService.tokenSecret === ''){
      this.router.navigate(['auth/login'])
      return false;
    }
    return true;
  }


}
