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
  validatorDate(input){
    let date:Date;
    let date2:Date;

    date = new Date();
    const dia = date.getDay();
    const mes = date.getMonth();
    const anio = date.getFullYear();
    date2 = new Date();
    const agregar_dias = 3;

    date2.setDate(date.getDate() + agregar_dias);
    const dia1 = date2.getDay();
    const mes1 = date2.getMonth();
    const anio1 = date2.getFullYear();
    if (date2>input){
      return false;
    }
    else {
      return true;
    }
  }
}
