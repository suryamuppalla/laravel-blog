import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BooksListComponent} from './books-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from '../../../app.component';
import {By, element} from 'protractor';
import {MatToolbarModule} from "@angular/material/toolbar";

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksListComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        RouterModule.forRoot([]),
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatProgressSpinnerModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title books list', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#books').textContent).toContain('Books');
  });
  it('should have Search Input', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('#search-input');
    expect(p).toBeDefined();
  });
  it('should have Search Input', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    // tslint:disable-next-line:no-non-null-assertion
    const p = bannerElement.querySelector('#search-input')!;
    expect(p.textContent).toBe('');
  });
  it('Loading is turned off default', () => {
    expect(component.isLoading).toBeDefined();
  });
  it('Books list should be empty default', () => {
    expect(component.books).toEqual([]);
  });
  it('Search control should be an instance of FormControl', () => {
    expect(component.search).toBeInstanceOf(FormControl);
  });
});
