import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Album} from '../album.model';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  @Input() albumnumber: number;
  public album: Album;
  constructor(public dialogRef: MatDialogRef<ItemDetailsComponent>, private albumService: AlbumsService) { }

  ngOnInit(): void {
    // this.receiveData()
  }

  getAlbum() {
    this.albumService.getAlbum(this.albumnumber).subscribe(
      (response: Album) => {
        this.album = response;
      }
    );
  }

  // receiveData($event) {
  //   this.albumid = $event;
  // }

  close() {
    this.dialogRef.close();
  }

}
