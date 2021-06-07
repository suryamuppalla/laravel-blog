import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Personal Library'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Personal Library');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo').textContent).toContain('Personal Library');
  });
  it('should have Toolbar', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    // tslint:disable-next-line:no-non-null-assertion
    const p = bannerElement.querySelector('#toolbar')!;
    expect(p).toBeDefined();
  });
});
