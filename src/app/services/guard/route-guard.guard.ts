import { Injectable, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, NavigationEnd} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginMockerService} from '../../pages/access/login.mocker.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {

  public routeChanged: EventEmitter<string> = new EventEmitter();
  protected previousUrl: string;

  constructor(private router: Router, private userService: LoginMockerService){
    // retrieve previous url
    router.events.subscribe( (event) => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = event.url;
      }
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const currentUrl: string = state.url !== null ? state.url : route.url != null && route.url.length > 0 ? route.url[0].path : '';

    if (!environment.production) {
      return true;
    }
    const date = new Date();
    if (environment.production && date >= environment.productionDate) {
      return true;
    }

    /*if ((currentUrl.includes('login') && !LoginMockerService.isLog)){
      return true;
    }

    if (environment.production && date <= environment.productionDate && !LoginMockerService.isLog) {
      this.router.navigate(['login']);
      return false;
    }

    if (LoginMockerService.isLog) {
      return true;
    }
    // When user tries to access the login page but already logs in.
    if ((!currentUrl.includes('login') && !LoginMockerService.isLog)){
      this.router.navigate(['login']);
      return false;
    }*/
  }
}
