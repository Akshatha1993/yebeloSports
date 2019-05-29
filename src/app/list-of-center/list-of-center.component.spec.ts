import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCenterComponent } from './list-of-center.component';

describe('ListOfCenterComponent', () => {
  let component: ListOfCenterComponent;
  let fixture: ComponentFixture<ListOfCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
