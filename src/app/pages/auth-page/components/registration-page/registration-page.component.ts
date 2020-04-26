import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {RegistrationModel} from "../../../../core/models/registration.model";
import {RegistrationService} from "../../../../core/services/registration.service";
import {Router} from "@angular/router";
import {CurrentUserService} from "../../../../core/services/current-user.service";
import {AuthorizationService} from "../../../../core/services/authorization.service";
import {switchMap} from "rxjs/operators";


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  @ViewChild('form', {read: NgForm, static: false}) form!: NgForm;

  constructor(
    private registrationService: RegistrationService,
    private currentUserService: CurrentUserService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  handleRegisterSubmit(data: RegistrationModel) {
    if (!this.form.valid) {
      return;
    }

    this.registrationService
      .register(data)
      .pipe(
        switchMap(() => this.authorizationService.loadProfile())
      )
      .subscribe(
        profile => {
          this.currentUserService.user$.next(profile);
          this.router.navigateByUrl('/');
        },
        (response) => {
          const error = response.error.error;

          switch (error) {
            case 'EMAIL_DUPLICATE':
              this.form.controls.email.setErrors({
                email_duplicate: true
              });
              break;
            case 'USERNAME_DUPLICATE':
              this.form.controls.username.setErrors({
                username_duplicate: true
              });
              break;
          }
        }
      );
  }

  changeConfirmPassword(password: NgModel, confirmPassword: NgModel) {
    if (confirmPassword.control.value !== password.control.value) {
      confirmPassword.control.setErrors({'error': true});
    }
  }
}
