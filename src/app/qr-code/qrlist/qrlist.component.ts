import { Component, OnInit } from '@angular/core';
import { QrscannerService } from 'src/app/services/qrscanner.service';

@Component({
  selector: 'app-qrlist',
  templateUrl: './qrlist.component.html',
  styleUrls: ['./qrlist.component.css']
})
export class QrlistComponent implements OnInit {
  qrList: any[] = [];
  constructor(
    private qrService: QrscannerService
  ) { }

  ngOnInit(): void {
    this.qrService.getQrs().subscribe((_qrList) => {
      this.qrList = _qrList;
    })
  }

}
