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

  addAlbum(album: Album): Observable<Album> {
    const url = 'http://localhost:3000/albums';
    return this.http.post<Album>(url, album);
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

  deleteAlbum(id: number) {
    const url = 'http://localhost:3000/albums/' + id;
    return this.http.delete<Album>(url);
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = 'http://localhost:3000/albums' + album.id;
    return this.http.put<Album>(url, album);
  }
}


