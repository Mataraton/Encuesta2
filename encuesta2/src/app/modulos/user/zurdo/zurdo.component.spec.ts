import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZurdoComponent } from './zurdo.component';

describe('ZurdoComponent', () => {
  let component: ZurdoComponent;
  let fixture: ComponentFixture<ZurdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZurdoComponent]
    });
    fixture = TestBed.createComponent(ZurdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
