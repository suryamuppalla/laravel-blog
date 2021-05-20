import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddNewBookComponent} from './add-new-book/add-new-book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AddNewBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})
export class AddNewBookModule {
}
