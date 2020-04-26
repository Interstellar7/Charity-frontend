import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {MatDialogRef} from "@angular/material/dialog";
import {CreateUserModel, UserModel} from "../../models/user.model";
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.component.html',
  styleUrls: ['./user-create-dialog.component.css']
})
export class UserCreateDialogComponent implements OnInit {

  @ViewChild('form', {read: NgForm, static: false}) form!: NgForm;

  constructor(private userService: UserService, private dialog: MatDialogRef<UserModel>) {
  }

  ngOnInit(): void {
  }

  submitForm(data: CreateUserModel) {
    this.userService.createUser(data).subscribe((profile) => {
        this.dialog.close(profile);
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
      });
  }

  changeConfirmPassword(password: NgModel, confirmPassword: NgModel) {
    if (confirmPassword.control.value !== password.control.value) {
      confirmPassword.control.setErrors({error: true});
    }
  }
}
