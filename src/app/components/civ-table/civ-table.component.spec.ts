import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivTableComponent } from './civ-table.component';

describe('CivTableComponent', () => {
  let component: CivTableComponent;
  let fixture: ComponentFixture<CivTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CivTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
