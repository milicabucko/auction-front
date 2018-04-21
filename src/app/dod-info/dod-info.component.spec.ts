import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodInfoComponent } from './dod-info.component';

describe('DodInfoComponent', () => {
  let component: DodInfoComponent;
  let fixture: ComponentFixture<DodInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
