import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { SearchService } from './services/search.service';
import { DeviceDetectionService } from './services/device-detection.service';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { forkJoin } from 'rxjs';
// import { AlertComponent } from './_components/alert.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  ipAddress:any = {};
  ipData: any = {};
  deviceInfoData = {};
  user?: User | null;
  searchList: any;
  deviceInfo = '';
  isMobile = false;
  userAgent = '';
  isIos = false;
  isAndroid = false;
  maxtouchPoints: any;
  constructor(
    private router: Router,
    private common: CommonService,
    private searchService: SearchService,
    public deviceDetailed: DeviceDetectionService,
    private auth: AuthenticationService
  ) {


    this.auth.user.subscribe(x => this.user = x);
    if (this.deviceDetailed.isAndroid() && this.deviceDetailed.checkIsMobile()) {
      // let url = 'https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf';

    } else if (this.deviceDetailed.isIos() && this.deviceDetailed.checkIsMobile()) {

      // let url = 'https://apps.apple.com/in/app/subway-surfers/id512939461';

    } else {
      // alert("Desktop");
    }
    this.getIP();
    this.deviceInfo = this.deviceDetailed.detectDevice();

    this.isMobile = this.deviceDetailed.checkIsMobile();
    this.isIos = this.deviceDetailed.isIos();
    this.isAndroid = this.deviceDetailed.isIos();

    this.userAgent = navigator.userAgent;
    this.maxtouchPoints = navigator.maxTouchPoints;

    this.router.events.subscribe((event) => {


      if (event instanceof NavigationEnd && event.url === '/') {
        // Redirect to the partial URL
        // this.router.navigate(['/partial-url']);
      }
    });

  }
  title = 'test';
  routerNavigateTo(routeTo: string) {
    this.router.navigate([routeTo])
  }
  getIP() {
    this.common.getIP().subscribe((data) => {
      // console.log(data);
    });
  }

  search(eve: any) {
    this.searchService.search({ term: eve.target.value }).subscribe((data): any => {
      console.log(data, 64);
      if (data.success) {
        this.searchList = data.data;
      }
    })
  }
  logout() {
    this.auth.logout()
  }


  ngOnInit() {
    const ipAddress$ = this.deviceDetailed.getIP();
    const ipData$ = this.deviceDetailed.getDetailedIP();

    // Combine the observables to wait for both requests to complete
    forkJoin([ipAddress$, ipData$]).subscribe(([ipAddress, ipData]) => {
      console.log(ipAddress, 345)
      // this.ipAddress = ipAddressData['ip'];
      this.ipData = ipData;

      // Populate deviceInfoData with the received data
      this.deviceInfoData = {
        deviceName: this.deviceDetailed.detectDevice(),
        mobile: this.deviceDetailed.checkIsMobile(),
        ios: this.deviceDetailed.isIos(),
        android: this.deviceDetailed.isAndroid(),
        ipInfo: this.ipData,
        ipAddres: this.ipAddress.ip,
      };

      // Submit the data to the backend
      this.deviceDetailed.insertData(this.deviceInfoData).subscribe((data) => {
        console.log(data, 'Data submitted successfully to the backend');
      });
    });
  }
}
