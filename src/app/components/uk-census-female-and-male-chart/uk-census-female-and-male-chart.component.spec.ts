import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkCensusFemaleAndMaleChartComponent } from './uk-census-female-and-male-chart.component';

describe('UkCensusFemaleAndMaleChartComponent', () => {
  let component: UkCensusFemaleAndMaleChartComponent;
  let fixture: ComponentFixture<UkCensusFemaleAndMaleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkCensusFemaleAndMaleChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkCensusFemaleAndMaleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
