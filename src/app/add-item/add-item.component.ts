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
  public state: string;

  constructor(public dialogRef: MatDialogRef<AddItemComponent>, private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.state = 'disabled';
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
    // default type is LP
    this.selectedType = 'LP';
    this.inColl = true;
    this.inFaV = false;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  // checks if title and artist is filled in
  checkReqs() {
    if (this.album.album !== '' && this.album.artist !== '') {
      this.state = '';
    } else {
      this.state = 'disabled';
    }
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
    // just for safety, but should never be used
    if (this.album.album === '') {
      this.album.album = 'Unknown album';
    }
    if (this.album.artist === '') {
      this.album.artist = 'Unknown artist';
    }
    // default values
    if (this.album.label === '') {
      this.album.label = 'Unknown label';
    }
    if (this.album.year === null) {
      this.album.year = 1900;
    }
    const newAlbum: Album = this.album;
    this.albumService.addAlbum(newAlbum).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.dialogRef.close();
  }
}
