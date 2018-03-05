import {Headers, RequestOptions} from '@angular/http';

export class ApiRequestOptions extends RequestOptions {

  constructor(options?: any) {
    super(options);


    if (this.headers == null) {
      this.headers = new Headers();
    }
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    const token = localStorage.getItem('authToken');
    if (token) {
      this.headers.append('Authorization', `Bearer ${token}`);
    }
  }
}
