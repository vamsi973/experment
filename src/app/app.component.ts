import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private common: CommonService
  ) {
    this.getIP();
  }
  title = 'test';
  routerNavigateTo(routeTo: string) {
    this.router.navigate([routeTo])
  }
  getIP() {
    this.common.getIP().subscribe((data) => {
      console.log(data);
    });
    let aupris = {
      "liters": 3000,
      "firstName": "Andreas",
      "lastName": "Wunder",
      "street": "",
      "zipCode": "32839",
      "city": "Wunder",
      "country": "DE",
      "locale": "de",
      "currencyCode": "EUR",
      "productCode": "12345",
      "customerGroupCode": "",
      "options": [],
      "hwid": "ONH000000009"
    };
    let keck= {
      "liters": 2850,
      "firstName": "Erika",
      "lastName": "Stucke ",
      "street": "Mündener Str. 6",
      "zipCode": "34399",
      "city": "Wesertal / Oedelsheim",
      "country": "DE",
      "locale": "de",
      "currencyCode": "EUR",
      "productCode": "1",
      "customerGroupCode": "",
      "options": [],
      "hwid": "ON9334034524"
    }
    this.common.getPrices(keck).subscribe(data => {
      console.log(data);
    })
  }
}
