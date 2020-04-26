import {Component, OnInit} from '@angular/core';
import {AdService} from "../../services/ad.service";

@Component({
  selector: 'ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {

  constructor(private adService: AdService) {
  }

  ngOnInit(): void {
  }
}
