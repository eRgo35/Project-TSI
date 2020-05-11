import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/shared/services/sidenav.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html'
})
export class WrapperComponent implements AfterViewInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
