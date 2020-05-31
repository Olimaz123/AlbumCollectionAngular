import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';
import {EditAlbumComponent} from '../edit-album/edit-album.component';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() public albumid;

  public album: Album;
  constructor( private albumService: AlbumsService,  private modalService: NgbModal, public activeModal: NgbActiveModal) {}

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
    this.getAlbum();
  }

  getAlbum() {
    this.albumService.getAlbum(this.albumid).subscribe(
      (response: Album) => {
        console.log(response);
        this.album = response;
      }
    );
  }

  onEdit() {
    console.log('editing album');
    const modalRef = this.modalService.open(EditAlbumComponent);
    modalRef.componentInstance.albumid = this.albumid;
  }

  onDelete() {
    const modalRef = this.modalService.open(ConfirmComponent);
    modalRef.componentInstance.albumid = this.albumid;
  }

  removeFavs() {
    this.album.inFavs = false;
    this.activeModal.close();
    const changedAlbum: Album = this.album;
    this.albumService.updateAlbum(changedAlbum).subscribe(
      () => console.log(changedAlbum)
    );
  }
  addToFavs() {
    this.album.inFavs = true;
    this.activeModal.close();
    const changedAlbum: Album = this.album;
    this.albumService.updateAlbum(changedAlbum).subscribe(
      () => console.log(changedAlbum)
    );
  }
  addToColl() {
    this.album.inCollection = true;
    this.album.inWishlist = false;
    this.activeModal.close();
    const changedAlbum: Album = this.album;
    this.albumService.updateAlbum(changedAlbum).subscribe(
      () => console.log(changedAlbum)
    );
  }
  addToWish() {
    this.album.inWishlist = true;
    this.album.inCollection = false;
    this.activeModal.close();
    const changedAlbum: Album = this.album;
    this.albumService.updateAlbum(changedAlbum).subscribe(
      () => console.log(changedAlbum)
    );
  }
}

// delete confirmation
@Component({
  template: `
  <div class="modal-header">
    <h1>Delete Album?</h1>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete this album?</p>
    <p><strong>This action can not be reverted.</strong></p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="activeModal.dismiss()">Cancel</button>
    <a href="" type="button" class="btn btn-danger" (click)="onDelete()">Delete</a>
  </div>
  `
})
export class ConfirmComponent {

  @Input() public albumid;
  constructor(public activeModal: NgbActiveModal, private albumService: AlbumsService) {
  }

  onDelete() {
    this.albumService.deleteAlbum(this.albumid).subscribe();
    console.log('deleting');
  }
}
