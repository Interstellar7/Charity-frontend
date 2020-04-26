import {
  Directive,
  EmbeddedViewRef,
  Input,
  isDevMode,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {Subscription} from "rxjs";
import {CurrentUserService} from "../services/current-user.service";
import {Role} from "../models/current-user.model";

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {

  @Input() appHasRole!: Role | Role[];

  private rolesSub = Subscription.EMPTY;
  private view?: EmbeddedViewRef<void>;

  constructor(private template: TemplateRef<void>,
              private vc: ViewContainerRef,
              private currentUser: CurrentUserService) {
  }

  ngOnInit(): void {
    if (this.appHasRole == undefined) {
      if (isDevMode()) {
        throw Error('input is required');
      }
      return;
    }
    const roles = Array.isArray(this.appHasRole) ? this.appHasRole : [this.appHasRole];
    this.rolesSub = this.currentUser.hasRole(...roles)
      .subscribe(has => {
        if (has) {
          if (this.view == undefined) {
            this.view = this.vc.createEmbeddedView(this.template);
          }
        } else {
          if (this.view != undefined) {
            this.view.destroy();
            this.view = undefined;
          }
        }
      })
  }

  ngOnDestroy(): void {
    this.rolesSub.unsubscribe();
    if (this.view != undefined) {
      this.view.destroy();
      this.view = undefined;
    }
  }
}
