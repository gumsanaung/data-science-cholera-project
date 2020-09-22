import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkCensusComponent } from './uk-census.component';

describe('UkCensusComponent', () => {
  let component: UkCensusComponent;
  let fixture: ComponentFixture<UkCensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkCensusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UkCensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
