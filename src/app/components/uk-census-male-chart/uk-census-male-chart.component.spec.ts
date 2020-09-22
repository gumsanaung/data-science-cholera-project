import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkCensusMaleChartComponent } from './uk-census-male-chart.component';

describe('UkCensusMaleChartComponent', () => {
  let component: UkCensusMaleChartComponent;
  let fixture: ComponentFixture<UkCensusMaleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkCensusMaleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkCensusMaleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
