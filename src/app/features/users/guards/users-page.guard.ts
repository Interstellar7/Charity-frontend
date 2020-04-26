import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CurrentUserService} from "../../../core/services/current-user.service";
import {Role} from "../../../core/models/current-user.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersPageGuard implements CanActivate {

  constructor(private currentUserService: CurrentUserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.currentUserService.hasRole(Role.ADMIN).pipe(
      map(can => {
        if (can) {
          return true;
        }
        return this.router.createUrlTree(['/']);
      })
    );
  }

}
