import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mode1ListComponent } from './mode1-list.component';

describe('Mode1ListComponent', () => {
  let component: Mode1ListComponent;
  let fixture: ComponentFixture<Mode1ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mode1ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mode1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
