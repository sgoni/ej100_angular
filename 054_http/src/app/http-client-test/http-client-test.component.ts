import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Post } from '../post';
import { delay, forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-http-client-test',
  templateUrl: './http-client-test.component.html',
  styleUrls: ['./http-client-test.component.css'],
})
export class HttpClientTestComponent implements OnInit {
  resultadoPeticion: Object | any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        observe: 'response',
      })
      .subscribe((data) => {
        this.resultadoPeticion = data.body;
        console.log(data);
      });

    /*  
    this.http
      .request('GET', 'https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.resultadoPeticion = data;
      });
    */
  }

  post() {
    this.http
      .post<Post>('https://jsonplaceholder.typicode.com/posts', {
        title: 'Previsión Viernes.',
        body: 'Parcialmente soleado.',
        userId: 1,
      })
      .subscribe((data) => {
        this.resultadoPeticion = data;
        console.log('Id. de la nueva publicación: ' + data.id);
      });
  }

  put() {
    this.http
      .put('https://jsonplaceholder.typicode.com/posts/1000', {
        id: 1,
        title: 'Previsión Lunes',
        body: 'Lluvias.',
        userId: 1,
      })
      .subscribe(
        (data) => {
          this.resultadoPeticion = data;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Error cliente o red:', err.error.message);
          } else {
            console.log(
              `Error servidor remoto. ${err.status} # ${err.message}`
            );
          }
        }
      );
  }

  patch() {
    this.http
      .patch('https://jsonplaceholder.typicode.com/posts/1', {
        body: 'Soleado.',
      })
      .subscribe((data) => {
        this.resultadoPeticion = data;
      });
  }

  delete() {
    this.http
      .delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.resultadoPeticion = data;
      });
  }

  get_param() {
    const headers = new HttpHeaders().set('Autorizacion', 'mi token');
    const params = new HttpParams().set('userId', '9');

    this.http
      .get('https://jsonplaceholder.typicode.com/posts', { headers, params })
      .subscribe((data) => {
        this.resultadoPeticion = data;
      });
  }

  peti_paral() {
    const request1 = this.http
      .get('https://jsonplaceholder.typicode.com/posts/4')
      .pipe(delay(3000));
    const request2 = this.http.get(
      'https://jsonplaceholder.typicode.com/todos/5'
    );

    forkJoin([request1, request2]).subscribe((data) => {
      this.resultadoPeticion = data;
    });
  }

  peti_sec() {
    this.http
      .get<Post>('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(
        switchMap((data) => {
          data.title = '(MODIFICADO) ' + data.title;

          return this.http.put<Post>(
            'https://jsonplaceholder.typicode.com/posts/1',
            data
          );
        })
      )
      .subscribe((data) => {
        this.resultadoPeticion = data;
      });
  }

  post_prgEvents() {
    const request = new HttpRequest(
      'POST',
      'https://jsonplaceholder.typicode.com/posts/',
      {
        title: 'Critica de la pelicula',
        body: 'Me ha gustado mucho',
        userId: 1,
      },
      { reportProgress: true }
    );

    this.http.request(request).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * (event.loaded / event.total));
        console.log(`Fichero transferido en un ${percentDone}%`);
      } else if (event.type === HttpEventType.Response) {
        this.resultadoPeticion = event.body;
      }
    });
  }
}
