import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListsComponent } from './create-lists.component';

describe('CreateListsComponent', () => {
  let component: CreateListsComponent;
  let fixture: ComponentFixture<CreateListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
