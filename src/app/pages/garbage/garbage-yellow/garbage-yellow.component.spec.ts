import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageYellowComponent } from './garbage-yellow.component';

describe('GarbageYellowComponent', () => {
  let component: GarbageYellowComponent;
  let fixture: ComponentFixture<GarbageYellowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageYellowComponent]
    });
    fixture = TestBed.createComponent(GarbageYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
