import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondingCivTableComponent } from './corresponding-civ-table.component';

describe('CorrespondingCivTableComponent', () => {
  let component: CorrespondingCivTableComponent;
  let fixture: ComponentFixture<CorrespondingCivTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrespondingCivTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondingCivTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
