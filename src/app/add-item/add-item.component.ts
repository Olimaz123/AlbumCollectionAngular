import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Album} from '../album.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  // @Output() albumEnter = new EventEmitter<{artist: string, album: string, type: string, year: number,
  //     label: string, collection: boolean, fav: boolean, wish: boolean}>();

  types = [
    {name: 'LP', value: 'LP'},
    {name: 'CD', value: 'CD'},
    {name: 'EP', value: 'EP'},
    {name: 'Single', value: 'Single'},
    {name: 'Digital', value: 'Digital'},
    {name: 'Cassette', value: 'Cassette'},
    {name: 'Other', value: 'Other'},
  ];
  inColl: boolean;
  selectedType: string;
  album: Album;

  constructor(public dialogRef: MatDialogRef<AddItemComponent>) { }

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
    this.selectedType = 'LP';
    this.inColl = true;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  saveAlbum() {
    this.album.type = this.selectedType;
    if (this.inColl === true) {
      this.album.inCollection = true;
      this.album.inFavs = false;
    } else if (this.inColl === false) {
      this.album.inCollection = false;
      this.album.inWishlist = true;
    }
    console.log(this.album);
    this.dialogRef.close();
  }

}
