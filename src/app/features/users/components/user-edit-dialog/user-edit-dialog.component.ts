import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UpdateUserModel, UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {

  @Input()
  user!: UserModel;
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user: UserModel },
    private fb: FormBuilder,
    private userService: UserService,
    private dialog: MatDialogRef<UserModel>
  ) {
    this.user = data.user;
    this.buildForm();
  }

  ngOnInit(): void {
    this.updateForm(this.user);
  }


  handleEditSubmit(f: UpdateUserModel) {
    const userData = {
      firstName: f.firstName,
      lastName: f.lastName,
      email: f.email
    };

    this.userService.updateUser(this.user.id, userData)
      .subscribe(() => {
          this.dialog.close(this.user);
        },
        (response) => {
          const error = response.error.error;

          switch (error) {
            case 'EMAIL_DUPLICATE':
              this.form.controls.email.setErrors({
                email_duplicate: true
              });
              break;
          }
        });
  }

  private buildForm() {
    const pi = this.user.personalInfo;

    this.form = this.fb.group({
      firstName: this.fb.control(pi.firstName, [Validators.required]),
      lastName: this.fb.control(pi.lastName, [Validators.required]),
      email: this.fb.control(pi.email, [Validators.email])
    });
  }

  private updateForm(user: UserModel) {
    const formValue = {
      firstName: user.personalInfo.firstName,
      lastName: user.personalInfo.lastName,
      email: user.personalInfo.email
    };

    this.form.patchValue(formValue);
  }
}
