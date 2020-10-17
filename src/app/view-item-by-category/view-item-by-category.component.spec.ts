import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemByCategoryComponent } from './view-item-by-category.component';

describe('ViewItemByCategoryComponent', () => {
  let component: ViewItemByCategoryComponent;
  let fixture: ComponentFixture<ViewItemByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItemByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
