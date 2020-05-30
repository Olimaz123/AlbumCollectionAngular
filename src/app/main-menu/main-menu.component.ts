import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddItemComponent} from '../add-item/add-item.component';
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public searchTerm: string;
  constructor(public matDialog: MatDialog, public albumService: AlbumsService) { }

  ngOnInit(): void {
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
    console.log(this.searchTerm);
  }

}
