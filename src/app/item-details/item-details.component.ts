import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() public albumid;

  // @Input() albumnumber: number;
  public album: Album;
  // public albumid: number;
  constructor(/*public dialogRef: MatDialogRef<ItemDetailsComponent>,*/ private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.album = {
      id: null,
      album: '',
      artist: '',
      year: null,
      type: '',
      label: '',
      inCollection: false,
      inFavs: false,
      inWishlist: false
    };
    // this.albumid = 0;
    // this.albumService.currentAlbum.subscribe(response => this.albumid = response);
    this.getAlbum();
    console.log(this.albumid);
  }

  getAlbum() {
    this.albumService.getAlbum(this.albumid).subscribe(
      (response: Album) => {
        this.album = response;
      }
    );
  }

  // receiveData($event) {
  //   this.albumid = $event;
  // }

  // close() {
  //   this.dialogRef.close();
  // }

}
