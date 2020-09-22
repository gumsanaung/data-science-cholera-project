import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkCensusTableComponent } from './uk-census-table.component';

describe('UkCensusTableComponent', () => {
  let component: UkCensusTableComponent;
  let fixture: ComponentFixture<UkCensusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkCensusTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkCensusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
