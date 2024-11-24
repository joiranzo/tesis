import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMonedaComponent } from './crear-moneda.component';

describe('CrearMonedaComponent', () => {
  let component: CrearMonedaComponent;
  let fixture: ComponentFixture<CrearMonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMonedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
