import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseUrl, Constants} from '../../../common/constants';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  public book: any = {};
  public baseUrl = BaseUrl;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.bookDetails(params.bookId);
    });
  }

  ngOnInit(): void {
  }

  bookDetails(bookId: string): void {
    this.httpClient.get(`${Constants.books}/${bookId}`)
      .subscribe((response: any) => {
        if (response && response.length > 0) {
          this.book = response[0];
        }
      });
  }
}
