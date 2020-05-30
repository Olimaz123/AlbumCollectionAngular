import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
    // this.selectedType.
    this.inColl = true;
    // this.inFaV = true;
    if (this.album.inFavs === true) {
      this.inFaV = true;
    }
  }

  getAlbum() {
    this.albumService.getAlbum(this.albumid).subscribe(
      (response) => this.album = response,
      (error) => console.log(error),
      () => console.log(this.album)
    );
  }

  saveEdit() {
    const changedAlbum: Album = this.album;
    this.albumService.updateAlbum(changedAlbum).subscribe(
      (response) => {
        console.log(changedAlbum);
      }
    );
  }
}
