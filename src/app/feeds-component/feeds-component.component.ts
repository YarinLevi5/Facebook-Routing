import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../entities/feed';
@Component({
  selector: 'app-feeds-component',
  templateUrl: './feeds-component.component.html',
  styleUrls: ['./feeds-component.component.scss']
})
export class FeedsComponentComponent implements OnInit {
  @Input() feeds: Feed[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
