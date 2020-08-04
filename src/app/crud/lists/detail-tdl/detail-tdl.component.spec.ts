import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTdlComponent } from './detail-tdl.component';

describe('DetailTdlComponent', () => {
  let component: DetailTdlComponent;
  let fixture: ComponentFixture<DetailTdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
