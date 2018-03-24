import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private serviceHelper: AppService,
    private router: Router,
  ) { }

  private checkAccess(): boolean {
    if (localStorage.getItem(this.serviceHelper.AUTH_COOKIE) != null) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAccess();
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkAccess();
  }

}
