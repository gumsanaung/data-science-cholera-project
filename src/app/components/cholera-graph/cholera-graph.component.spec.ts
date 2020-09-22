import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholeraGraphComponent } from './cholera-graph.component';

describe('CholeraGraphComponent', () => {
  let component: CholeraGraphComponent;
  let fixture: ComponentFixture<CholeraGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholeraGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholeraGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
