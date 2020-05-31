import {Component, OnInit} from '@angular/core';
import { AlbumsService} from '../albums.service';
import {Album} from '../album.model';
import {ItemDetailsComponent} from '../item-details/item-details.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  providers: [AlbumsService]
})

export class CollectionComponent implements OnInit {

  public albums: Album[];
  public albumid: number;
  constructor(private albumService: AlbumsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.albums = [];
    this.albumid = null;
    this.onGetAlbums();
  }

  onGetAlbums() {
    this.albumService.getAlbums().subscribe(
      (response: Album[]) => {
        this.albums = response;
      },
      (error) => console.log(error),
      () => console.log('done')
    );
  }

  openDetails(albumToOpen: number) {
    this.albumid = albumToOpen;
    const modalRef = this.modalService.open(ItemDetailsComponent);
    modalRef.componentInstance.albumid = this.albumid;
  }
}
