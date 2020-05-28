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
  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albums = [];
    this.onGetAlbums();
  }

  onGetAlbums() {
    this.albumsService.getAlbums().subscribe(
      (response: Album[]) => {
        JSON.parse(JSON.stringify(response));
        console.log(response);
        this.albums = response;
      },
      (error) => console.log(error),
      () => console.log('done')
    );
  }
}
