import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-zdjecia-source',
  template: `
  <mat-tab-group mat-align-tabs="start">
    <mat-tab label="HTML">
      <iframe #iframe onload="resizeIframe(this)" style="border: none; width: 100%;" type="text/javascript"></iframe>
    </mat-tab>
  </mat-tab-group>
  `
})
export class ZdjeciaSourceComponent implements OnInit, AfterViewInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Zdjęcia (Kod źródłowy)");
  }

  gistUrl = "https://gist.github.com/eRgo35/d339e98c4fdc4777d2fb986c08133930.js";

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
