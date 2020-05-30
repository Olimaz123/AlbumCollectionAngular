import { Component, OnInit } from '@angular/core';
import { AlbumsService} from '../albums.service';
import {Album} from '../album.model';
import {ItemDetailsComponent} from '../item-details/item-details.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
  providers: [AlbumsService]
})
export class FavouritesComponent implements OnInit {

  public albums: Album[];
  public albumid: number;
  constructor(private albumService: AlbumsService, /*private matDialog: MatDialog,*/ private modalService: NgbModal) { }

  ngOnInit(): void {
    this.albums = [];
    this.albumid = null;
    this.onGetAlbums();
  }

  onGetAlbums() {
    this.albumService.getFavAlbums().subscribe(
      (response: Album[]) => {
        JSON.parse(JSON.stringify(response));
        console.log(response);
        this.albums = response;
      },
      (error) => console.log(error),
      () => console.log('done')
    );
  }

  openDetails(albumToOpen: number) {
    console.log('opening details');
    console.log(albumToOpen);
    this.albumid = albumToOpen;
    const modalRef = this.modalService.open(ItemDetailsComponent);
    modalRef.componentInstance.albumid = this.albumid;
  }

}
