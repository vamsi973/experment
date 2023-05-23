import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {

  deviceType: string = '';
  deviceInfo: string = '';
  constructor() { }

  checkIsMobile(): boolean {
    return /android|webos|iphone|ipad|ipod|blackberry|windows phone/.test(
      navigator.userAgent.toLowerCase()
    ) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }


  isIos() {
    let objAgent = navigator.userAgent;
    const iPadOS13Up = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    let objfullVersion = '' + parseFloat(navigator.appVersion);
    let objOffsetVersion;
    if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
      objfullVersion = objAgent.substring(objOffsetVersion + 7, objOffsetVersion + 13);
      if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
        objfullVersion = objAgent.substring(objOffsetVersion + 8, objOffsetVersion + 14);
    }
    if (/iphone|ipad|ipod|ios/i.test(
      navigator.userAgent.toLowerCase()
    ) || iPadOS13Up) {
      console.log(console.log(`%c  ios version: ${parseFloat(objfullVersion)}`, 'background: #C88EA7;, color: #bada55'))
    }
    return /iphone|ipad|ipod|ios/i.test(
      navigator.userAgent.toLowerCase()
    ) || iPadOS13Up;
  }
  detectDevice() {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    if (/iPad|iPhone|iPod/.test(userAgent) && !navigator.maxTouchPoints) {
      this.deviceType = 'iOS Device';
    } else if (/Android/.test(userAgent) && navigator.maxTouchPoints) {
      this.deviceType = 'Android Device';
    } else if (/Win/.test(platform)) {
      this.deviceType = 'Windows Desktop';
    } else if (/Mac/.test(platform)) {
      this.deviceType = 'Mac Desktop';
    } else if (/Linux/.test(platform)) {
      this.deviceType = 'Linux Desktop';
    } else {
      this.deviceType = 'Unknown';
    }
    console.log(`%c  Device Type: ${this.deviceType}`, 'background: #C4DFDF;, color: #bada55');
    console.log(`%c   User Agent: ${userAgent}`, 'background: #73A9AD;, color: #bada55');
    console.log(`%c  Platform: ${platform}`, 'background: #C88EA7;, color: #bada55');
    return this.deviceType
  }
}
