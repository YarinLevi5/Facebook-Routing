import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { Post } from 'src/app/entities/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post = new Post('1', '', '', '', new Date());

  constructor(private userService: UserService, private route: ActivatedRoute) {
    let postId = this.route.snapshot.paramMap.get('postId');
    if (postId) {
      this.post = this.userService.getPostById(postId ?? '')
    } else {
      throw new Error('Post id is not defined');
    }
  }
}