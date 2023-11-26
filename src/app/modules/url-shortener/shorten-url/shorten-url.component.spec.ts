import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenUrlComponent } from './shorten-url.component';

describe('ShortenUrlComponent', () => {
  let component: ShortenUrlComponent;
  let fixture: ComponentFixture<ShortenUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortenUrlComponent]
    });
    fixture = TestBed.createComponent(ShortenUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
