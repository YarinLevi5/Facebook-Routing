import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() user: User = new User('', '', 0, '', '', new Date(), [], []);
  constructor(private userService: UserService, private route: ActivatedRoute) {
    let userId = this.route.snapshot.paramMap.get('userId');
    this.user = this.userService.getUserById(userId as string);
  }
  ngOnInit(): void {
  }

}
