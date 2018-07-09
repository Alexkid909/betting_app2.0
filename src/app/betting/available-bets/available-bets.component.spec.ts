import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBetsComponent } from './available-bets.component';

describe('BetsComponent', () => {
  let component: AvailableBetsComponent;
  let fixture: ComponentFixture<AvailableBetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableBetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
