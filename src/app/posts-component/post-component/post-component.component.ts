import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../entities/post';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {
  @Input() post: Post = new Post('5678', '', 'title1', 'content1');
  constructor() { }

  ngOnInit(): void {
  }

}
