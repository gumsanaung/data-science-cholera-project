import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholeraAndGendersGraphComponent } from './cholera-and-genders-graph.component';

describe('CholeraAndGendersGraphComponent', () => {
  let component: CholeraAndGendersGraphComponent;
  let fixture: ComponentFixture<CholeraAndGendersGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholeraAndGendersGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholeraAndGendersGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
