import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseUrl, Constants} from '../../../common/constants';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from '../../confirm-dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-update-music',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  public isLoading = false;
  public form: FormGroup = new FormGroup({
    title: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    author: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
    language: new FormControl(null, Validators.required),
    img: new FormControl(null)
  });
  public formData = new FormData();
  public book: any = {};
  public baseUrl = BaseUrl;

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.bookDetails(params.id);
      }
    });
  }

  ngOnInit(): void {
  }

  fileUpload(event: Event): void {
    // @ts-ignore
    this.form.patchValue({img: event.target.files[0].name});
    // @ts-ignore
    this.formData.append('file', event.target.files[0]);
  }

  bookDetails(bookId: string): void {
    this.isLoading = true;
    this.httpClient.get(`${Constants.books}/${bookId}`)
      .subscribe((response: any) => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
        if (response && response.length > 0) {
          this.book = response[0];
          this.form.patchValue(this.book);
          this.form.patchValue({img: ''});
        }
      });
  }

  uploadBookFile(): void {
    if (this.form.valid) {
      this.dialog.open(ConfirmDialogComponent, {
        width: `450px`,
        data: {title: `Are you sure you want to update?`, btn: `Update`}
      }).afterClosed().subscribe(confirmed => {
        if (confirmed) {
          if (this.form.value.img) {
            this.isLoading = true;
            delete this.form.value.img;

            this.httpClient.post(
              Constants.bookFileUpload,
              this.formData
            ).subscribe((response: any) => {
              console.log(response);
              if (response && response.data) {
                this.updateNewBook(response.data);
              }
            });
          } else {
            this.updateNewBook(this.book.img);
          }
        }
      });
    }
  }

  updateNewBook(file: string): void {
    const data = this.form.value;
    data.img = file;
    this.httpClient.put(
      `${Constants.books}/${this.book.id}`,
      data
    ).subscribe((response: any) => {
      this.snackBar.open(response.message, '', {
        verticalPosition: 'top', duration: 4000
      });
      this.router.navigate(['/books']);
    }, (error: any) => {
      console.log(error);
    });
  }

  deleteConfirm(): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: `Are you sure you want to delete?`,
        btn: `Delete`
      }
    }).afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.httpClient.delete(`${Constants.books}/${this.book.id}`)
          .subscribe((response: any) => {
            console.log(response);
            this.snackBar.open(response.message, '', {
              duration: 4000, verticalPosition: 'top'
            });
            this.router.navigate(['/books']);
          });
      }
    });
  }

}
