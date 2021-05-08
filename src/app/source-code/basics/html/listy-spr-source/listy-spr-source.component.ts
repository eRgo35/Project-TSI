import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-listy-spr-source',
  template: `
  <mat-tab-group mat-align-tabs="start">
    <mat-tab label="HTML">
      <iframe #iframe onload="resizeIframe(this)" style="border: none; width: 100%;" type="text/javascript"></iframe>
    </mat-tab>
  </mat-tab-group>
  `
})
export class ListySprSourceComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Listy Zaliczenie (Kod źródłowy)");
  }

  gistUrl = "https://gist.github.com/eRgo35/c7e1794f806cc1ae57c2716dde10aaa0.js";

  ngAfterViewInit() {
    const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
    const content = `
        <base target="_parent">
        <script type="text/javascript" src="${this.gistUrl}"></script>
    `;
    doc.open();
    doc.write(content);
    doc.close();
  }

}
