import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoIndexComponent } from './auto-index.component';

describe('AutoIndexComponent', () => {
  let component: AutoIndexComponent;
  let fixture: ComponentFixture<AutoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
