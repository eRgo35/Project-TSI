import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title = new BehaviorSubject('Strona Główna');

  setTitle(title: string) {
      this.title.next(title);
  }
}
