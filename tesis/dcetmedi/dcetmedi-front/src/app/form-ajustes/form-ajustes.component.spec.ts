import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjustesComponent } from './form-ajustes.component';

describe('FormAjustesComponent', () => {
  let component: FormAjustesComponent;
  let fixture: ComponentFixture<FormAjustesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAjustesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjustesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
