import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit() {
    this.loading = true;

    this.spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }

}
