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
}
