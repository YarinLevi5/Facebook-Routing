import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/entities/post';
@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  @Input() post: Post = new Post('', '', '', '', new Date());
  constructor() { }
  ngOnInit(): void {
  }

}
