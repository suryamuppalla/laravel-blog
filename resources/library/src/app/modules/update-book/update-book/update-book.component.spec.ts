import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpdateBookComponent} from './update-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {ConfirmDialogModule} from '../../confirm-dialog/confirm-dialog.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('UpdateBookComponent', () => {
  let component: UpdateBookComponent;
  let fixture: ComponentFixture<UpdateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateBookComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        ConfirmDialogModule,
        MatDialogModule,
        MatButtonModule,
        RouterModule.forRoot([]),
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSnackBarModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Title field validity', () => {
    const name = component.form.controls.title;
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });

  it('Description field validity', () => {
    const name = component.form.controls.description;
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });


  it('Author field validity', () => {
    const name = component.form.controls.author;
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });

  it('Rating field validity', () => {
    const name = component.form.controls.rating;
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });

  it('Language field validity', () => {
    const name = component.form.controls.language;
    expect(name.valid).toBeFalsy();

    name.setValue(null);
    expect(name.hasError('required')).toBeTruthy();
  });
});
