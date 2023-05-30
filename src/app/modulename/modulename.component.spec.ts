import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulenameComponent } from './modulename.component';

describe('ModulenameComponent', () => {
  let component: ModulenameComponent;
  let fixture: ComponentFixture<ModulenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulenameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
