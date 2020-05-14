import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivCellComponent } from './civ-cell.component';

describe('CivCellComponent', () => {
  let component: CivCellComponent;
  let fixture: ComponentFixture<CivCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
