import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PechoComponent } from './pecho.component';

describe('PechoComponent', () => {
  let component: PechoComponent;
  let fixture: ComponentFixture<PechoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PechoComponent]
    });
    fixture = TestBed.createComponent(PechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
