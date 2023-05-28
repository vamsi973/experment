import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  user: User | null;

  constructor(private accountService: AuthenticationService) {
    this.user = this.accountService.userValue;
  }
  ngOnInit(): void {
  }
}
