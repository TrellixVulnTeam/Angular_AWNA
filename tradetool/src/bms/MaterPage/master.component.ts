
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'master-root',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  title = 'MasterPageComponent';
  constructor(private router: Router) {
  }

  ngOnInit() {

  }



}
