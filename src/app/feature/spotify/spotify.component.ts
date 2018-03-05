import { SpotifyApiService } from './../../core/api/spotify-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {

  constructor(private service: SpotifyApiService) { }

  ngOnInit(): void { }

  login(): void {
    const width = 450;
    const height = 730;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    window.addEventListener('message', (event) => {
      const hash = JSON.parse(event.data);
      if (hash.type === 'access_token') {
        // callback(hash.access_token);
      }
    }, false);

    const w = window.open(this.service.getLoginUrl(['user-read-email']),
      'Spotify',
      `menubar=no,location=no,resizable=no,scrollbars=no,status=no,width='${width}',height='${height}',top='${top}', left='${left}`
    );
  }

}
