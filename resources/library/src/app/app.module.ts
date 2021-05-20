import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BookDetailsModule} from './modules/book-details/book-details.module';
import {AddNewBookModule} from './modules/add-new-book/add-new-book.module';
import {BooksListModule} from './modules/books-list/books-list.module';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        BookDetailsModule,
        AddNewBookModule,
        BooksListModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
