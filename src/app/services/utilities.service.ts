import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CommunicatorService} from './communicator.service';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  validatorsFields(input){
    return input !== undefined && input !== null && input !== 'null' && input.length !== 0;
  }
}
