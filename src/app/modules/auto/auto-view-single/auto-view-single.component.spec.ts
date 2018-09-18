import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoViewSingleComponent } from './auto-view-single.component';

describe('AutoViewSingleComponent', () => {
  let component: AutoViewSingleComponent;
  let fixture: ComponentFixture<AutoViewSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoViewSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoViewSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
