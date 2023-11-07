import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenteComponent } from './frente.component';

describe('FrenteComponent', () => {
  let component: FrenteComponent;
  let fixture: ComponentFixture<FrenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrenteComponent]
    });
    fixture = TestBed.createComponent(FrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
