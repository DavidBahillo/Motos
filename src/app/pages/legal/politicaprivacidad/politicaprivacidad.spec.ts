import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Politicaprivacidad } from './politicaprivacidad';

describe('Politicaprivacidad', () => {
  let component: Politicaprivacidad;
  let fixture: ComponentFixture<Politicaprivacidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Politicaprivacidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Politicaprivacidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
