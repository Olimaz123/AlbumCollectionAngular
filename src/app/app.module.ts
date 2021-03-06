import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AlbumTitleFormatPipe } from './title-format.pipe';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectionComponent } from './collection/collection.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import {RouterModule, Routes} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const appRoutes: Routes = [
  { path: '', component: CollectionComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'favourites', component: FavouritesComponent},
  { path: 'collection', component: CollectionComponent},
  { path: 'results', component: SearchResultsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumTitleFormatPipe,
    MainMenuComponent,
    ItemDetailsComponent,
    AddItemComponent,
    CollectionComponent,
    FavouritesComponent,
    WishlistComponent,
    EditAlbumComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    NgbModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ItemDetailsComponent,
    EditAlbumComponent,
    SearchResultsComponent]
})
export class AppModule { }
