import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageGrayComponent } from './garbage-gray.component';

describe('GarbageGrayComponent', () => {
  let component: GarbageGrayComponent;
  let fixture: ComponentFixture<GarbageGrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageGrayComponent]
    });
    fixture = TestBed.createComponent(GarbageGrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
