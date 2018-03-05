import { ApiRequestOptions } from './api-request-optoins';

import { RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http/src/client';


export abstract class BaseApiService {
  constructor(protected http: HttpClient) { }

  get<T>(path: string, options?: RequestOptionsArgs | null, baseUrl?: string): Observable<T> {
    return this.http.get(this.getFullUrl(path, baseUrl), this.getRequestOptions(options))
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  post<T>(path: string, body: T, options?: RequestOptionsArgs | null, baseUrl?: string): Observable<T> {
    return this.http.post(
      this.getFullUrl(path, baseUrl),
      JSON.stringify(body),
      this.getRequestOptions(options)
    )
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  put<T>(path: string, body: T, options?: RequestOptionsArgs | null, baseUrl?: string): Observable<T> {
    return this.http.put(
      this.getFullUrl(path, baseUrl),
      JSON.stringify(body),
      this.getRequestOptions(options)
    )
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  delete<T>(path: string, options?: RequestOptionsArgs | null, baseUrl?: string): Observable<T> {
    return this.http.delete(
      this.getFullUrl(path, baseUrl),
      this.getRequestOptions(options)
    )
      .map(this.checkForError)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  private getFullUrl(path: string, baseUrl?: string): string {
    return `${baseUrl ? baseUrl : this.apiBaseUrl}${path}`;
  }

  private getRequestOptions(options?: RequestOptionsArgs | null): RequestOptionsArgs {
    if (options == null) {
      options = new ApiRequestOptions(options);
    }
    return options;
  }

  private getJson(response: Response): any {
    const repsponseJson = response.json();
    return repsponseJson ? (repsponseJson.data || repsponseJson) : null;
  }

  private checkForError(response: Response): Response | Observable<any> {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error: Error = new Error(response.statusText ? response.statusText : undefined);
      console.error(error);
      throw error;
    }
  }
}
