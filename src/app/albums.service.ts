import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Album} from './album.model';
// import { BehaviorSubject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albums: Album[];

  // private albumToFind = new BehaviorSubject<number>(1);
  // currentAlbum = this.albumToFind.asObservable();

  constructor(private http: HttpClient) {}

  // changeAlbum(album: number) {
  //   this.albumToFind.next(album);
  // }

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


