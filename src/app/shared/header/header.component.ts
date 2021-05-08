import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import { SidenavService } from '../services/sidenav.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = '';
  toggleActive = false;

  constructor(
    private titleService: TitleService,
    private sidenav: SidenavService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  onViewCode() {
    var page = this.router.url.replace("/code", "");
    var page_empty = this.router.url;
    if (page_empty === page + '/code') {
      this.router.navigateByUrl(page);
    }
    else {
      this.router.navigateByUrl(page + '/code');
    }
  }
}
