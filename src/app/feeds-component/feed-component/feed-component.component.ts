import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../entities/feed';
@Component({
  selector: 'app-feed-component',
  templateUrl: './feed-component.component.html',
  styleUrls: ['./feed-component.component.scss']
})
export class FeedComponentComponent implements OnInit {
  @Input() feed: Feed = new Feed([], []);
  constructor() { }

  ngOnInit(): void {
  }

}
