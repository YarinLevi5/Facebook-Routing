import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.scss']
})
export class PostsComponentComponent implements OnInit {
  @Input() posts: Post[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
