import { Component, OnInit } from '@angular/core';
import {Album, AlbumsService} from '../albums.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  providers: [AlbumsService]
})
export class CollectionComponent implements OnInit {
  albums: Album[];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albums = [];
    this.albumsService.getAlbums().subscribe(
      (response: Album[]) => {
        console.log(response);
        this.albums.push(response);
      },
      (error) => console.log(error),
      () => console.log('done')
    );
  }

  // onGetBooks() {
  //   this.albumsService.getAlbums().subscribe(
  //
  //   );
  // }
}
