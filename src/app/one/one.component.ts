import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  testData:any;
  constructor(
    private cs: CommonService
  ) { }

  ngOnInit(): void {

    this.testData = this.cs.getData();
    
  }

}
