import {Component, OnInit} from '@angular/core';
import {AdService} from "../../features/ads/services/ad.service";
import {CategoryService} from "../../features/ads/services/category.service";

@Component({
  selector: 'ads-page',
  templateUrl: './ads-page.component.html',
  styleUrls: ['./ads-page.component.css']
})
export class AdsPageComponent implements OnInit {

  constructor(private adService: AdService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }
}
