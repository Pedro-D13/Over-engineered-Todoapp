import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTdlComponent } from './delete-tdl.component';

describe('DeleteTdlComponent', () => {
  let component: DeleteTdlComponent;
  let fixture: ComponentFixture<DeleteTdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
