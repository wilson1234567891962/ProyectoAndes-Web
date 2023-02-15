import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private email = '';
  private password = '';
  private isChecked = false;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.checkIsSaveUser();
  }

  checkIsSaveUser() {
    const emailSaved = localStorage.getItem('USER_ACTIVE');
    if(emailSaved !== undefined && emailSaved !== 'null' && emailSaved !== ''){
       this.email = emailSaved;
       this.isChecked = true;
    }
  }

  saveUser() {
    if(!this.isChecked)  {
      this.isChecked = true;
      localStorage.setItem('USER_ACTIVE', this.email);
    } else   {
      this.isChecked = false;
      localStorage.setItem('USER_ACTIVE', '');
    }
  }

  login(){
    this.loginService.user = this.email;
    this.loginService.password = this.password;
    if(this.isChecked)  {
      localStorage.setItem('USER_ACTIVE', this.email);
    }
    this.loginService.login().subscribe(result => {
      this.loginService.tokenSecret = result.data.token;
      this.loginService.rol = result.data.rol;
      this.router.navigate(['admin/dashboard']);
    }, error => {

    })
  }
}
