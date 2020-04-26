import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserModel} from "../../../../features/users/models/user.model";
import {combineLatest, Observable, ReplaySubject} from "rxjs";
import {UserService} from "../../../../features/users/services/user.service";
import {MatDialog} from "@angular/material/dialog";
import {UserCreateDialogComponent} from "../../../../features/users/components/user-create-dialog/user-create-dialog.component";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-users-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {

  users?: UserModel[];

  selectedUser?: UserModel;

  users$!: Observable<UserModel[]>;

  private refresh$ = new ReplaySubject<void>(1);

  constructor(private userService: UserService, private dialogService: MatDialog) {
  }

  ngOnInit(): void {
    this.users$ = combineLatest([this.refresh$]).pipe(
      switchMap(() => this.userService.getUsers())
    );
    this.refreshUsers();
  }

  refreshUsers() {
    this.refresh$.next();
  }

  clickCreateUser() {
    this.dialogService.open(UserCreateDialogComponent)
      .afterClosed()
      .subscribe(() => {
        this.refreshUsers();
      });
  }
}
