import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Album} from './album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  public searchTerm: string;

  constructor(private http: HttpClient) {}
  albums: Album[];

  // gets all albums in collection
  getAlbums(): Observable<Album[]> {
    const url = 'http://localhost:3000/albums?inCollection=true';
    return this.http.get<Album[]>(url);
  }
  // searches database for albums containing searchterm
  searchAlbum(term: string): Observable<Album[]> {
    this.albums = [];
    const urlalbum = 'http://localhost:3000/albums?album_like=' + term;
    return this.http.get<Album[]>(urlalbum);
  }

  // posts album to database
  addAlbum(album: Album): Observable<Album> {
    const url = 'http://localhost:3000/albums';
    return this.http.post<Album>(url, album);
  }

  // gets albums that are favourites
  getFavAlbums(): Observable<Album[]> {
    const url = 'http://localhost:3000/albums?inFavs=true';
    return this.http.get<Album[]>(url);
  }

  // gets all albums in wishlist
  getWishAlbums(): Observable<Album[]> {
    const url = 'http://localhost:3000/albums?inWishlist=true';
    return this.http.get<Album[]>(url);
  }

  // gets album with id
  getAlbum(id: number) {
    const url = 'http://localhost:3000/albums/' + id;
    return this.http.get<Album>(url);
  }

  // deletes album with id
  deleteAlbum(id: number) {
    const url = 'http://localhost:3000/albums/' + id;
    return this.http.delete<Album>(url);
  }

  // puts new album info in album
  updateAlbum(album: Album): Observable<Album> {
    const url = 'http://localhost:3000/albums/' + album.id;
    return this.http.put<Album>(url, album);
  }

}


