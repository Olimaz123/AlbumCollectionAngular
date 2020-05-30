import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ItemDetailsComponent} from '../item-details/item-details.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public searchTerm: string;
  public albums: Album[];
  public albumid: number;
  constructor(private albumService: AlbumsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.albums = [];
    this.albumid = null;
    this.searchTerm = this.albumService.searchTerm;
    this.onGetAlbums();
    console.log(this.searchTerm);
  }

  onGetAlbums() {
    this.albumService.searchAlbum(this.searchTerm).subscribe(
      (response: Album[]) => {
        JSON.parse(JSON.stringify(response));
        console.log(response);
        this.albums = response;
      },
      (error) => console.log(error),
      () => console.log('done')
    );
  }

  openDetails(albumToOpen: number) {
    console.log('opening details');
    console.log(albumToOpen);
    this.albumid = albumToOpen;
    const modalRef = this.modalService.open(ItemDetailsComponent);
    modalRef.componentInstance.albumid = this.albumid;
  }

}
