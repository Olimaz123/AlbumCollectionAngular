import { Component, OnInit } from '@angular/core';
import { AlbumsService} from '../albums.service';
import {Album} from '../album.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
   providers: [AlbumsService]
})
export class CollectionComponent implements OnInit {
  public albums: Album[];
  // public albumsReal: Album[];
  // public filler: Album;
  // public id: number;
  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albums = [];
    // this.albumsReal = [];
    this.onGetAlbums();
    // this.id = 0;
  }

  onGetAlbums() {
    this.albumsService.getAlbums().subscribe(
      (response: Album[]) => {
        JSON.parse(JSON.stringify(response));
        console.log(response);
        this.albums = response;
        // while (this.albums.length() > this.id) {
        //   this.filler = this.albums[this.id];
        //   this.albumsReal.push(this.filler);
        //   this.id++;
        // }
      },
      (error) => console.log(error),
      () => console.log('done')
    );
  }
}
