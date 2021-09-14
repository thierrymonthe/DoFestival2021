


import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {setApiKey, send} from '@sendgrid/mail';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
  }

  // sendMessage(body): Promise<any> {
  //   setApiKey(environment.sendGridKey);
  //   return send(body);
  // }
}
