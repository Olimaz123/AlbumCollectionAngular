import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {

  @Input() public albumid;
  public album: Album;
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
  public state: string;
  constructor(private albumService: AlbumsService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.album = {
      id: this.albumid,
      album: '',
      artist: '',
      year: null,
      type: '',
      label: '',
      inCollection: null,
      inFavs: null,
      inWishlist: null
    };
    this.getAlbum();
  }

  getAlbum() {
    this.albumService.getAlbum(this.albumid).subscribe(
      (response) => {
        if (response.inFavs === true) {
          this.inFaV = true;
        } else {
          this.inFaV = false;
        }
        if (response.inCollection === true) {
          this.inColl = true;
        } else {
          this.inColl = false;
        }
        this.selectedType = response.type;
        this.album = response;
        },
          (error) => console.log(error),
          () => console.log(this.album)
    );
  }

  // checks if title and artist are filled in
  checkReqs() {
    if (this.album.album !== '' && this.album.artist !== '') {
      this.state = '';
    } else {
      this.state = 'disabled';
    }
  }

  saveEdit() {
    this.album.type = this.selectedType;
    if (this.inColl === true) {
      this.album.inCollection = true;
      this.album.inWishlist = false;
    } else {
      this.album.inCollection = false;
      this.album.inWishlist = true;
    }
    if (this.inFaV === true) {
      this.album.inFavs = true;
    } else {
      this.album.inFavs = false;
    }
    const changedAlbum: Album = this.album;
    this.albumService.updateAlbum(changedAlbum).subscribe(
      () => console.log(changedAlbum)
    );
  }
}
