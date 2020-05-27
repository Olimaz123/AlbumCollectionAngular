import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) {}

  addAlbum(album) {
    // var collection = JSON.parse(data.json);
    // this.collection.push(album);
  }

  getAlbums(): Observable<Album[]> {
    const url = 'http://localhost:3000/albums';
    return this.http.get<Album[]>(url);
    // return this.albums;
  }

  deleteAlbum() {}

  updateAlbum() {}
}

export class Album {
  id: number;
  artist: string;
  album: string;
  type: string;
  year: number;
  label: string;
  inCollection: boolean;
  inFavs: boolean;
  inWishlist: boolean;
}

