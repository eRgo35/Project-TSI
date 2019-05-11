import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class titleService {
    title = new BehaviorSubject('Strona Główna');

    setTitle(title: string) {
        this.title.next(title);
    }
}