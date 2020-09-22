import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkCensusFemaleAndMaleGraphComponent } from './uk-census-female-and-male-graph.component';

describe('UkCensusFemaleAndMaleGraphComponent', () => {
  let component: UkCensusFemaleAndMaleGraphComponent;
  let fixture: ComponentFixture<UkCensusFemaleAndMaleGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkCensusFemaleAndMaleGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkCensusFemaleAndMaleGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
