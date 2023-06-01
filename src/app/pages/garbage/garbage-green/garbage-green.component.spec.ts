import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageGreenComponent } from './garbage-green.component';

describe('GarbageGreenComponent', () => {
  let component: GarbageGreenComponent;
  let fixture: ComponentFixture<GarbageGreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageGreenComponent]
    });
    fixture = TestBed.createComponent(GarbageGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
