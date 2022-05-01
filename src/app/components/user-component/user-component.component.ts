import { UserService } from './../../services/user-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/user';
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {
  @Input() user: User = new User('', '', 0, '', '', new Date(), [], []);
  constructor(private userService: UserService, private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id');
    this.user = this.userService.getUserById(id ?? '');
  }
  ngOnInit(): void {

  }

}
