import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { SearchService } from './services/search.service';
import { DeviceDetectionService } from './services/device-detection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchList: any;
  deviceInfo = '';
  isMobile = false;
  userAgent ='';
  isIos =false;
  constructor(
    private router: Router,
    private common: CommonService,
    private searchService: SearchService,
    public deviceDetetect: DeviceDetectionService
  ) {
    this.getIP();
    this.deviceInfo = this.deviceDetetect.detectDevice();
   
    this.isMobile = this.deviceDetetect.checkIsMobile();
    this.isIos = this.deviceDetetect.isIos();
    
    this.userAgent =navigator.userAgent;
  
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
      "zipCode": "73249",
      "city": "Berghof",
      "country": "DE",
      "locale": "de",
      "currencyCode": "EUR",
      "productCode": "12345",
      "customerGroupCode": "",
      "options": [],
      "hwid": "ONH000000009"
    };
    let keck = {
      "liters": 2850,
      "firstName": "Erika",
      "lastName": "Stucke ",
      "street": "Mündener Str. 6",
      "zipCode": "31073",
      "city": "Wesertal / Oedelsheim",
      "country": "DE",
      "locale": "de",
      "currencyCode": "EUR",
      "productCode": "10",
      "customerGroupCode": "",
      "options": [],
      "hwid": "ON9334034524"
    }
    this.common.getPrices(keck).subscribe(data => {
      console.log(data);
    })
  }

  search(eve: any) {
    this.searchService.search({ term: eve.target.value }).subscribe((data): any => {
      console.log(data, 64);
      if (data.success) {
        this.searchList = data.data;
      }
    })
  }
}
