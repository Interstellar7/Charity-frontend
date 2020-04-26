import {Component, OnInit} from '@angular/core';
import {CurrentUserService} from "../../services/current-user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthorizationService} from "../../services/authorization.service";
import {Role} from "../../models/current-user.model";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent implements OnInit {
  Role = Role;

  readonly user$ = this.currentUser.user$;

  constructor(
    private currentUser: CurrentUserService,
    private authService: AuthorizationService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleLogoutClick() {
    this.authService.logout()
      .subscribe(() => {
          this.authService.loadProfile()
            .subscribe(
              () => {
                throw new Error('Logout error 1!');
              },
              () => {
                this.currentUser.user$.next({authenticated: false});
                this.router.navigate([''], {
                  relativeTo: this.activeRoute
                });
              }
            );
        },
        () => {
          throw new Error('Logout error 2!');
        });
  }
}
