import {Component, Inject, Input, OnInit} from '@angular/core';
import {SetRolesUserModel, UserModel} from "../../models/user.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Role} from "../../../../core/models/current-user.model";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-user-role-dialog',
  templateUrl: './user-role-dialog.component.html',
  styleUrls: ['./user-role-dialog.component.css']
})
export class UserRoleDialogComponent implements OnInit {

  Role = Role;

  @Input()
  user!: UserModel;
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user: UserModel },
    private fb: FormBuilder,
    private roleService: RoleService,
    private dialog: MatDialogRef<UserModel>
  ) {
    this.user = data.user;
    this.buildForm();
  }

  ngOnInit(): void {
    this.updateForm(this.user);
  }


  handleSetRoleSubmit(f: SetRolesUserModel) {
    const userRoleData = {
      roles: f.roles
    };

    this.roleService.updateRoles(this.user.id, userRoleData)
      .subscribe(() => {
        this.dialog.close(this.user);
      });
  }

  private buildForm() {
    this.form = this.fb.group({
      roles: this.fb.control(this.user.roles, undefined)
    });
  }

  private updateForm(user: UserModel) {
    const formValue = {
      roles: user.roles
    };

    this.form.patchValue(formValue);
  }

  getRoles() {
    return Object.keys(this.Role);
  }
}
