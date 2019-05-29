import { Component, OnInit} from '@angular/core';
import {ApplicationStateService} from '../application-state.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input('activeStatusFlag') activeStatusFlag: string;
  // @Input('subMenuBorderFlag') subMenuBorderFlag: string;
  // public isMobile: boolean;

  constructor(private applicationStateService: ApplicationStateService, private route: Router) {
    // this.isMobile = this.applicationStateService.getIsMobileResolution();
    // console.log('header - ' + this.isMobile);
  }

  ngOnInit() {
  }
  login() {
    this.route.navigate(['/login']);
  }
}
