import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CommunicatorService} from './communicator.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {
  }

  validatorsFields(input) {
    return input !== undefined && input !== null && input !== 'null' && input.length !== 0;
  }

  validatorsEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!input.match(validRegex)) {
      return false;
    } else {
      return true;
    }
  }

  validatorDate(input: Date) {
    let date: Date;
    let date2: Date;

    date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    date2 = new Date();
    // tslint:disable-next-line:variable-name
    const add_days = 3;

    date2.setDate(date.getDate() + add_days);
    const day1 = date.getDay();
    const month1 = date.getMonth();
    const year1 = date.getFullYear();
    if (date2 > input) {
      return false;
    } else {
      return true;
    }
  }

  conversionDate(inputDataPicker: Date, validationDate: string) {
    const date = new Date(validationDate);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    inputDataPicker.setDate(inputDataPicker.getDate() + 1);
    console.log('nuevo')
    console.log(validationDate)
    console.log(inputDataPicker)
    return day === inputDataPicker.getDay() && month === inputDataPicker.getMonth() && year === inputDataPicker.getFullYear();
  }
}
