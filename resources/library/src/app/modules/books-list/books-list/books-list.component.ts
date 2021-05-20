import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Constants} from "../../../common/constants";
import {FormControl, Validators} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  public isLoading = false;
  public books: any[] = [];
  public search = new FormControl(null);

  constructor(
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getBooks('');

    this.search
      .valueChanges
      .pipe(debounceTime(500))
      .subscribe(search => {
        this.getBooks(search);
      });
  }

  getBooks(search: string): void {
    this.isLoading = true;
    let httpParams = new HttpParams();
    if (search) {
      httpParams = httpParams.append('searchText', search);
    }
    this.httpClient.get(Constants.books, {
      params: httpParams
    }).subscribe((response: any) => {
      setTimeout(() => {
        this.isLoading = false;
        this.books = response;
      }, 1500);
    }, () => {
      this.isLoading = false;
    });
  }
}
