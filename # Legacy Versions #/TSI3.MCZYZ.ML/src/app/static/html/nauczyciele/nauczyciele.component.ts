import { Component, OnInit } from '@angular/core';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-nauczyciele',
  templateUrl: './nauczyciele.component.html'
})
export class NauczycieleComponent implements OnInit {

  constructor(private titleService: titleService) { }

  ngOnInit() {
    this.titleService.setTitle("Nauczyciele");
  }

}
