import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoLeftBarComponent } from './auto-left-bar.component';

describe('AutoLeftBarComponent', () => {
  let component: AutoLeftBarComponent;
  let fixture: ComponentFixture<AutoLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
