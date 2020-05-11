import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludedCivTableComponent } from './excluded-civ-table.component';

describe('ExcludedCivTableComponent', () => {
  let component: ExcludedCivTableComponent;
  let fixture: ComponentFixture<ExcludedCivTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcludedCivTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludedCivTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
