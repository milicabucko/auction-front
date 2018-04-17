import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahtevZaNabavkuComponent } from './zahtev-za-nabavku.component';

describe('ZahtevZaNabavkuComponent', () => {
  let component: ZahtevZaNabavkuComponent;
  let fixture: ComponentFixture<ZahtevZaNabavkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZahtevZaNabavkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahtevZaNabavkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
