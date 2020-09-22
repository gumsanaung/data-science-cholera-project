import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkCensusFemaleChartComponent } from './uk-census-female-chart.component';

describe('UkCensusFemaleChartComponent', () => {
  let component: UkCensusFemaleChartComponent;
  let fixture: ComponentFixture<UkCensusFemaleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkCensusFemaleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkCensusFemaleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
