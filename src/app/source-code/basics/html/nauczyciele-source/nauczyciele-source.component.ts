import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-nauczyciele-source',
  template: `
  <mat-tab-group mat-align-tabs="start">
    <mat-tab label="HTML">
      <iframe #iframe scrolling="no" style="border: none; width: 100%; height: 100vh;" type="text/javascript"></iframe>
    </mat-tab>
  </mat-tab-group>
  `
})
export class NauczycieleSourceComponent implements OnInit, AfterViewInit {

  @ViewChild('iframe') iframe: ElementRef;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle("Nauczyciele");
  }

  gistUrl = "";

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
