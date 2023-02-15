import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CommunicatorService} from './communicator.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private _user = '';
  private _password = '';
  private _tokenSecret = '';
  private _rol = '';

  constructor(private communicatorService: CommunicatorService) { }

  login(): Observable<any>  {
    const body: any = {
      email: this.user,
      password: this.password
    };
    return this.communicatorService.http_post(environment.URL_PRODUCTION + 'login/', body);
  }

  forgetPassword(): Observable<any>  {
    const body: any = {
      email: this.user
    };
    return this.communicatorService.http_post(environment.URL_PRODUCTION + 'forgetPassword/', body);
  }

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }


  get tokenSecret(): string {
    return this._tokenSecret;
  }

  set tokenSecret(value: string) {
    this._tokenSecret = value;
  }

  get rol(): string {
    return this._rol;
  }

  set rol(value: string) {
    this._rol = value;
  }
}
