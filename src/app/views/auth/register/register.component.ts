import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilitiesService} from '../../../services/utilities.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  private _email = '';
  private _password = '';
  private _hideOptionsRegister = false;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private utilitiesService: UtilitiesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.checkParameters();
  }

  validationInfo() {
    return !this.utilitiesService.validatorsFields(this._email) ||
      !this.utilitiesService.validatorsFields(this._password)|| !this.utilitiesService.validatorsEmail(this._email);
  }

  checkParameters() {
    this.route.queryParams.subscribe(
      params => {
        if (params.id === 'forget') {
          this._hideOptionsRegister = true;
        }
      }
    )
  }

  goBack() {
    this.router.navigate(['auth/login']);
  }

  validationEmail() {
    return !this.utilitiesService.validatorsFields(this._email) || !this.utilitiesService.validatorsEmail(this._email);
  }

  register() {
    this.loginService.register(this._email, this._password).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    })
  }

  forgetPassword() {
    this.loginService.forgetPassword(this._email).subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    })
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get hideOptionsRegister(): boolean {
    return this._hideOptionsRegister;
  }

  set hideOptionsRegister(value: boolean) {
    this._hideOptionsRegister = value;
  }
}
