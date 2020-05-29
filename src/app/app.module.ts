import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleFormatPipe } from './title-format.pipe';
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

const appRoutes: Routes = [
  { path: '', component: CollectionComponent},
  { path: 'wishlist', component: WishlistComponent},
  { path: 'favourites', component: FavouritesComponent},
  { path: 'collection', component: CollectionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TitleFormatPipe,
    MainMenuComponent,
    ItemDetailsComponent,
    AddItemComponent,
    CollectionComponent,
    FavouritesComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

