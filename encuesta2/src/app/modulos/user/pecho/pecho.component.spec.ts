import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PechoComponent } from './pecho.component';

describe('PechoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PechoComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PechoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render content', () => {
    const fixture = TestBed.createComponent(PechoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-pecho')).toBeTruthy(); // Ajusta el selector según la estructura de tu componente
  });
});

