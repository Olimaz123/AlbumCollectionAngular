import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ItemDetailsComponent} from '../item-details/item-details.component';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/internal/operators';
import {Subject} from 'rxjs/index';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  @Input() public searchTerm;

  public destroyed = new Subject<any>();
  public albums: Album[];
  public albumid: number;
  constructor(private albumService: AlbumsService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.albums = [];
    this.albumid = null;
    this.searchTerm = this.albumService.searchTerm;
    this.onGetAlbums();
    // refreshes search results, even when already on search results page
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.searchTerm = this.albumService.searchTerm;
      this.onGetAlbums();
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onGetAlbums() {
    this.albumService.searchAlbum(this.searchTerm).subscribe(
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
