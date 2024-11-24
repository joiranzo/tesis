import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagnoencontradaComponent } from './pagnoencontrada.component';

describe('PagnoencontradaComponent', () => {
  let component: PagnoencontradaComponent;
  let fixture: ComponentFixture<PagnoencontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagnoencontradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagnoencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
