import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTdlComponent } from './update-tdl.component';

describe('UpdateTdlComponent', () => {
  let component: UpdateTdlComponent;
  let fixture: ComponentFixture<UpdateTdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
