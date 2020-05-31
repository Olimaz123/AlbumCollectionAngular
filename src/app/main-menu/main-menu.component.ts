import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddItemComponent} from '../add-item/add-item.component';
import {AlbumsService} from '../albums.service';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/internal/operators';
import {Album} from '../album.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public searchTerm: string;
  public albums: Album[];
  constructor(public matDialog: MatDialog, public albumService: AlbumsService, public router: Router) { }

  ngOnInit(): void {
    // this.router.events.pipe(
    //   filter((event: RouterEvent) => event instanceof NavigationEnd)
    // ).subscribe(() => {
    // });
    this.searchTerm = '';
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'item-details';
    dialogConfig.height = '350px';
    dialogConfig.width = '500px';
    const modalDialog = this.matDialog.open(AddItemComponent, dialogConfig);
  }

  onSearch() {
    this.albumService.searchTerm = this.searchTerm;
  }
}

