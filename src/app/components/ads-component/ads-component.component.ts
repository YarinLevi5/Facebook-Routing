import { Component, OnInit, Input } from '@angular/core';
import { Ad } from 'src/app/classes/ad';
@Component({
  selector: 'app-ads-component',
  templateUrl: './ads-component.component.html',
  styleUrls: ['./ads-component.component.scss']
})
export class AdsComponentComponent implements OnInit {
  @Input() ads: Ad[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
