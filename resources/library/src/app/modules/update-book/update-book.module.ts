import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateBookComponent } from './update-book/update-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {ConfirmDialogModule} from '../confirm-dialog/confirm-dialog.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    UpdateBookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    ConfirmDialogModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class UpdateBookModule { }
