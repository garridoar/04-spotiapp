import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    this.loading = false;
  }

  buscar(termino: string) {
    if(termino) {
      this.loading = true;
      console.log(termino);
      this.spotify.getArtistas( termino )
          .subscribe( data => {
            this.loading = false;
            console.log(data);
            this.artistas = data;
          });
    }
    else {
      this.artistas = null;
    }
  }

}
