import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusIndicatorBarComponent } from './status-indicator-bar.component';

describe('StatusIndicatorBarComponent', () => {
  let component: StatusIndicatorBarComponent;
  let fixture: ComponentFixture<StatusIndicatorBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusIndicatorBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusIndicatorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
