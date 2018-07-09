import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedBetsComponent } from './placed-bets.component';

describe('PlacedBetsComponent', () => {
  let component: PlacedBetsComponent;
  let fixture: ComponentFixture<PlacedBetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacedBetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacedBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
