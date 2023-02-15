import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {ActivatedRoute} from '@angular/router';
import {UtilitiesService} from '../../../services/utilities.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  private email = '';
  private password = '';
  private hideOptionsRegister = false;
  constructor(private loginService: LoginService, private route: ActivatedRoute, private utilitiesService:UtilitiesService) {}

  ngOnInit(): void {
    this.checkParameters();
  }
  validationInfo(){
    return !this.utilitiesService.validatorsFields(this.email) || !this.utilitiesService.validatorsFields(this.password);
  }  checkParameters() {
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
  validationEmail(){
    return this.email.length ===0;
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
