import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http/src/client';
import { Observable } from 'rxjs/Observable';
import { UrlSegment } from '@angular/router';
@Injectable()
export class SpotifyApiService extends BaseApiService {
  constructor(protected http: HttpClient, protected environment) {
    super(http);
  }

  getUser(): Observable<any> {
    return super.get(`${environment.spotify.apiBaseUrl}me`);
  }

  getLoginUrl(scopes: Array<string>): string {
    const urlParams = {
      client_id: environment.spotify.clientId,
      redirect_uri: encodeURIComponent('' + environment.spotify.oAuthProxyEndPoint),
      scope: encodeURIComponent(scopes.join(' ')),
      response_type: 'token'
    };
    return `environment.spotify.authUrl?${new UrlSegment('', urlParams)}`;
  }

}
