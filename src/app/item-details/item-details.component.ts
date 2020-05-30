import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';
import {EditAlbumComponent} from '../edit-album/edit-album.component';
import {NgbModal, NgbModalConfig, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {config} from 'rxjs/index';

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
    console.log(this.albumid);
  }

  getAlbum() {
    this.albumService.getAlbum(this.albumid).subscribe(
      (response: Album) => {
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
    this.albumService.deleteAlbum(this.albumid).subscribe();
    console.log('deleting album');
  }
}
