import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CholeraMapComponent } from './cholera-map.component';

describe('CholeraMapComponent', () => {
  let component: CholeraMapComponent;
  let fixture: ComponentFixture<CholeraMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CholeraMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CholeraMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
