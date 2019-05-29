import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToListOfCenter() {
    this.route.navigate(['/listOfCenter']);
  }
}
