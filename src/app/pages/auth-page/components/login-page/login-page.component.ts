import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthorizationService} from "../../../../core/services/authorization.service";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {Router} from "@angular/router";
import {AuthorizationModel} from "../../../../core/models/authorization.model";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('form', {read: NgForm, static: false}) form!: NgForm;

  constructor(
    private authService: AuthorizationService,
    private currentUserService: CurrentUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  handleLoginSubmit(data: AuthorizationModel) {
    this.authService.login({
      username: data.username,
      password: data.password
    }).pipe(
      switchMap(() => this.authService.loadProfile())
    ).subscribe(
      profile => {
        this.currentUserService.user$.next(profile);
        this.router.navigateByUrl('/');
      },
      () => {
        this.form.control.setErrors({
          server: true
        });
        // this.form.controls.username.setErrors({
        //   'login-incorrect': true
        // });
        // this.form.controls.password.setErrors({
        //   'login-incorrect': true
        // });
      }
    );
  }
}
