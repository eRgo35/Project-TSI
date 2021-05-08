import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-nauczyciele-source',
  template: `
  <mat-tab-group mat-align-tabs="start">
    <mat-tab label="HTML">
      <iframe #iframe onload="resizeIframe(this)" style="border: none; width: 100%;" type="text/javascript"></iframe>
    </mat-tab>
  </mat-tab-group>
  `
})
export class NauczycieleSourceComponent implements OnInit, AfterViewInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Nauczyciele (Kod źródłowy)");
  }

  gistUrl = "https://gist.github.com/eRgo35/3e563d70a6054827a692c7290640bffe.js";

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
