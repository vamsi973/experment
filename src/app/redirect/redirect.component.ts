import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { QrscannerService } from '../services/qrscanner.service';
import { DeviceDetectionService } from '../services/device-detection.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private qrScanner: QrscannerService,
    public deviceDetetect: DeviceDetectionService,
  ) { }

  ngOnInit(): void {
    // const currentUrl = this.location.href;
    const currentUrl = this.router.url;
    this.route.params.subscribe(params => {
      const randomString = params['randomString'];
      console.log(randomString,277);
      
      this.qrScanner.redirectUrl(randomString).subscribe((data) => {
        if (data.category == 'StoreUrl') {
          // requestedAppStoreUrl
          // requestedpPlayStoreUrl

          if (this.deviceDetetect.isAndroid() && this.deviceDetetect.checkIsMobile()) {
            let url = data.requestedpPlayStoreUrl;
            window.location.replace(url)
          } else if (this.deviceDetetect.isIos() && this.deviceDetetect.checkIsMobile()) {
            alert("ios");
            let url = data.requestedAppStoreUrl;
            window.location.replace(url)
            // window.location.href = 'https://apps.apple.com/in/app/subway-surfers/id512939461';
          } else {
            // alert("Desktop");
          }
        }
      })
    });
    

  }

}
