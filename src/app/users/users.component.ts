import { UserService } from 'src/app/services/user-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../entities/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() users: User[] = []
  constructor(private userService: UserService) {
    this.users = this.userService.getAllUsers();
  }

}
