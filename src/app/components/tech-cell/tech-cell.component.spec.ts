import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCellComponent } from './tech-cell.component';

describe('TechCellComponent', () => {
  let component: TechCellComponent;
  let fixture: ComponentFixture<TechCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
