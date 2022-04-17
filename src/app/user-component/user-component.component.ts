import { UserService } from './../services/user-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {
  @Input() user: User = new User('', '', 0, '', '', new Date(), [], []);

  ngOnInit(): void {

  }

}
