import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholeraTableComponent } from './cholera-table.component';

describe('CholeraTableComponent', () => {
  let component: CholeraTableComponent;
  let fixture: ComponentFixture<CholeraTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholeraTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholeraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
