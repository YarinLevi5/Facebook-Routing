import { Post } from 'src/app/classes/post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  @Input() userPosts: Post[] = []
  constructor() { }
  ngOnInit(): void {
  }

}
