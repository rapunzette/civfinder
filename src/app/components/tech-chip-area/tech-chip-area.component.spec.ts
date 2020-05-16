import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechChipAreaComponent } from './tech-chip-area.component';

describe('TechChipAreaComponent', () => {
  let component: TechChipAreaComponent;
  let fixture: ComponentFixture<TechChipAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechChipAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechChipAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
