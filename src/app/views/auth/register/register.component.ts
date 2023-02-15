import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  private email = '';
  private password = '';
  private hideOptionsRegister = false;
  constructor(private loginService: LoginService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.checkParameters();
  }

  checkParameters() {
    this.route.queryParams.subscribe(
      params => {
        if(params.id === 'forget'){
           this.hideOptionsRegister = true;
        }
      }
    )
  }
  goBack() {
    history.back();
  }

  register(){
    this.loginService.register(this.email, this.password).subscribe(result => {
       console.log(result);
    }, error => {
       console.log(error);
    })
  }

  forgetPassword(){
    this.loginService.forgetPassword(this.email).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    })
  }
}
