import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  testData:any;
  constructor(public cs: CommonService) { }

  ngOnInit(): void {
    this.testData = this.cs.getData();
    
  }

}
