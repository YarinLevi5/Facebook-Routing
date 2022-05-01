import { Component, Input } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './postByUser.component.html',
  styleUrls: ['./postByUser.component.scss']
})
export class PostByUserComponent {
  @Input() user: User = new User('', '', 0, '', '', new Date(), [], []);

  constructor(private userService: UserService, private route: ActivatedRoute) {
    let userId = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUserById(userId ?? '');
  }

}
