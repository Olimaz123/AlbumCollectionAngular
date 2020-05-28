import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Album} from './album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albums: Album[];

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    const url = 'http://localhost:3000/albums?inCollection=true';
    return this.http.get<Album[]>(url);
  }

  getFavAlbums(): Observable<Album[]> {
    const url = 'http://localhost:3000/albums?inFavs=true';
    return this.http.get<Album[]>(url);
  }

  getWishAlbums(): Observable<Album[]> {
    const url = 'http://localhost:3000/albums?inWishlist=true';
    return this.http.get<Album[]>(url);
  }


  getAlbum(id: number) {
    const url = 'http://localhost:3000/albums/' + id;
    return this.http.get<Album>(url);
  }

  deleteAlbum() {}

  updateAlbum() {}
}


