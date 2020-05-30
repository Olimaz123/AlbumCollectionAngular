import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

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
  inFaV: boolean;
  selectedType: string;
  album: Album;

  constructor(public dialogRef: MatDialogRef<AddItemComponent>, private albumService: AlbumsService) { }

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
    this.inFaV = false;
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
    if (this.inFaV === true) {
      this.album.inFavs = true;
    } else {
      this.album.inFavs = false;
    }
    if (this.album.album === '') {
      this.album.album = 'Unknown album';
    }
    if (this.album.artist === '') {
      this.album.artist = 'Unknown artist';
    }
    if (this.album.label === '') {
      this.album.label = 'Unknown label';
    }
    if (this.album.year === null) {
      this.album.year = 2020;
    }

    console.log(this.album);
    const newAlbum: Album = this.album;
    this.albumService.addAlbum(newAlbum).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.dialogRef.close();
  }
}
