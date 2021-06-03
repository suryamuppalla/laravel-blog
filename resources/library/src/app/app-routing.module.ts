import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookDetailsComponent} from './modules/book-details/book-details/book-details.component';
import {AddNewBookComponent} from './modules/add-new-book/add-new-book/add-new-book.component';
import {BooksListComponent} from './modules/books-list/books-list/books-list.component';
import {UpdateBookComponent} from './modules/update-book/update-book/update-book.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/books', pathMatch: 'full'
  },
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: 'book-details/:bookId',
    component: BookDetailsComponent
  },
  {
    path: 'update-book/:id',
    component: UpdateBookComponent
  },
  {
    path: 'add-book',
    component: AddNewBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
