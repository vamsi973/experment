import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  user: User | null;



  constructor(private accountService: AuthenticationService, private router: Router) {
    this.user = this.accountService.userValue;
  }
  ngOnInit(): void {
  }
  navigateToQrCode() {
    console.log("navigate to qr code");
    this.router.navigate(['/qrCode']);

  }
}
