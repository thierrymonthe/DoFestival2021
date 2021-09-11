import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginMockerService{

  public static isLog = false;

  login(user: any): Observable<any> {
    if (user.userName === 'yvan1234' && user.password === '1234') {
      return new Observable<any>(ob => {
         const token = {user: null, access_token: null, refresh_token: null};
         token.user = user;
         token.access_token = 'YIPOIUTT';
         token.refresh_token = '969696666';
         ob.next(token);
      });
    }
  }
}
