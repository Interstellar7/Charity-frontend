import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../models/user.model';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {UserEditDialogComponent} from "../user-edit-dialog/user-edit-dialog.component";
import {UserRoleDialogComponent} from "../user-role-dialog/user-role-dialog.component";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  columns = ['id', 'firstName', 'lastName', 'username', 'roles', 'actions'];

  @Input()
  users!: UserModel[];

  @Input()
  selectedUser?: UserModel;

  @Output()
  selectedUserChange = new EventEmitter<UserModel>();
  @Output()
  refresh = new EventEmitter();

  constructor(private dialogService: MatDialog) {
  }

  ngOnInit() {
  }

  handleSelectedRow(row: UserModel) {
    this.selectedUser = row;
    this.selectedUserChange.emit(row);
  }

  handleEditClick(row: UserModel) {
    this.dialogService.open(UserEditDialogComponent, {
      data: { user: row }
    })
      .afterClosed()
      .subscribe(() => {
        this.refresh.emit();
      });
  }

  handleSetRoleClick(row: UserModel) {
    this.dialogService.open(UserRoleDialogComponent, {
      data: { user: row }
    })
      .afterClosed()
      .subscribe(() => {
        this.refresh.emit();
      });
  }
}
