import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {CurrentUserService} from "./core/services/current-user.service";
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Charity Service';

  private sub = Subscription.EMPTY;

  user$ = this.currentUser.user$.pipe();


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private currentUser: CurrentUserService
  ) {
  }

  ngOnInit(): void {

    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const snapshot = this.route.snapshot;

      const title = this.getTitle(snapshot);
      this.titleService.setTitle(title ?? this.title);
    });
  }

  private getTitle(snapshot: ActivatedRouteSnapshot): string | undefined {
    if ('title' in snapshot.data) {
      return snapshot.data.title;
    }
    for (const child of snapshot.children) {
      const childTitle = this.getTitle(child);
      if (childTitle != undefined) {
        return childTitle;
      }
    }
    return undefined;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
