import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOcultarComponent } from './mostrar-ocultar.component';

describe('MostrarOcultarComponent', () => {
  let component: MostrarOcultarComponent;
  let fixture: ComponentFixture<MostrarOcultarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarOcultarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarOcultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
