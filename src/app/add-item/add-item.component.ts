import {Component, HostListener, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Album} from "../album.model";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() albumEnter = new EventEmitter<{artist: string, album: string, type: string, year: number,
      label: string, collection: boolean, fav: boolean, wish: boolean}>();

  album: Album;
  // @Input() albumEntry: {artist: string, album: string, type: string, year: number,
  //   label: string, collection: boolean, fav: boolean, wish: boolean};

  constructor(public dialogRef: MatDialogRef<AddItemComponent>) { }

  ngOnInit(): void {
    this.album = {
      id: null,
      album: '',
      artist: '',
      year: 0,
      type: '',
      label: '',
      inCollection: false,
      inFavs: false,
      inWishlist: false
    };
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveAlbum() {
    console.log(this.album);
  }

}
