import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import { SidenavService } from '../services/sidenav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = '';
  toggleActive = false;

  constructor(private titleService: TitleService, private sidenav: SidenavService) { }

  ngOnInit(): void {
    this.titleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

}
