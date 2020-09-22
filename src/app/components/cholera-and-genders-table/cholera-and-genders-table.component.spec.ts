import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholeraAndGendersTableComponent } from './cholera-and-genders-table.component';

describe('CholeraAndGendersTableComponent', () => {
  let component: CholeraAndGendersTableComponent;
  let fixture: ComponentFixture<CholeraAndGendersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholeraAndGendersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholeraAndGendersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
