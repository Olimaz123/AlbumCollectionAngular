import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AlbumsService} from '../albums.service';
import {Album} from '../album.model';
import {MatCard} from '@angular/material/card';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ItemDetailsComponent} from '../item-details/item-details.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  providers: [AlbumsService]
})

export class CollectionComponent implements OnInit {

  public albums: Album[];
  public albumid: number;
  // @Output() dataEvent = new EventEmitter<number>();
  constructor(private albumService: AlbumsService, /*private matDialog: MatDialog,*/ private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.albumsService.currentAlbum.subscribe(albumid => this.albumid = albumid);
    this.albums = [];
    this.albumid = null;
    this.onGetAlbums();
  }

  onGetAlbums() {
    this.albumService.getAlbums().subscribe(
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
    // this.albumService.changeAlbum(albumId);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.id = 'item-details';
    // dialogConfig.height = '600px';
    // dialogConfig.width = '500px';
    // const modalDialog = this.matDialog.open(ItemDetailsComponent, dialogConfig);
  }
}
