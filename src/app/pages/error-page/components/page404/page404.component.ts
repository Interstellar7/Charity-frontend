import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  public counter!: number;
  public interval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.counter = 5;

    this.interval = setInterval(() => {
      if (--this.counter <= 1) {
        clearInterval(this.interval);
        this.router.navigateByUrl('/');
      }
    }, 1000);
  }

}
