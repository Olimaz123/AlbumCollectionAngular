import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AlbumsService} from '../albums.service';
import {Album} from '../album.model';
import {MatCard} from '@angular/material/card';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ItemDetailsComponent} from '../item-details/item-details.component';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  providers: [AlbumsService]
})
export class CollectionComponent implements OnInit {
  // public albums2: Album[];
  public albums: Album[];
  public albumid: number;
  @Output() dataEvent = new EventEmitter<number>();
  constructor(private albumsService: AlbumsService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.albums = [];
    this.albumid = null;

    // this.albums2 = [
    //   {
    //     id: 1,
    //     artist: 'AC/DC',
    //     album: 'For Those About to Rock',
    //     year: 1981,
    //     type: 'LP',
    //     label: 'Atlantic',
    //     inCollection: true,
    //     inFavs: false,
    //     inWishlist: false
    //   },
    //   {
    //     id: 2,
    //     artist: 'Accept',
    //     album: 'Restless and Wild',
    //     year: 1982,
    //     type: 'LP',
    //     label: 'Brain Records',
    //     inCollection: true,
    //     inFavs: false,
    //     inWishlist: false
    //   }
    // ];
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

  openDetails(albumid: number) {
    console.log('opening details');
    console.log(albumid);
    this.dataEvent.emit(albumid);
    this.albumid = albumid;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'item-details';
    dialogConfig.height = '600px';
    dialogConfig.width = '500px';
    const modalDialog = this.matDialog.open(ItemDetailsComponent, dialogConfig);
  }
}
