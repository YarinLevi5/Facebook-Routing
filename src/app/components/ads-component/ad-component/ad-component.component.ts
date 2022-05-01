import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'src/app/classes/ad';
@Component({
  selector: 'app-ad-component',
  templateUrl: './ad-component.component.html',
  styleUrls: ['./ad-component.component.scss']
})
export class AdComponentComponent implements OnInit {
  @Input() ad: Ad = new Ad('1', '', 'ad1');
  constructor() { }

  ngOnInit(): void {
  }

}
