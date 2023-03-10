import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipeAsyncPipe';

  promiseData: string;
  observableData: string;
  observableSubs: Subscription | undefined;
  promiseObj: Promise<string>;
  observableObj: Observable<string>;

  constructor() {
    this.promiseData = '';
    this.observableData = '';

    this.getPromise().then((v) => (this.promiseData = v));

    this.observableSubs = this.getObservable().subscribe(
      (v) => (this.observableData = v)
    );

    this.promiseObj = this.getPromise();

    this.observableObj = this.getObservable();
  }

  getPromise() {
    return new Promise<string>(function (resolve, reject) {
      setTimeout(() => {
        resolve('Timer1 finalizado');
      }, 2000);
    });
  }

  getObservable() {
    return new Observable<string>((observer) => {
      setTimeout(() => {
        observer.next('Timer2 Finalizado');
      }, 4000);
    });
  }
}
