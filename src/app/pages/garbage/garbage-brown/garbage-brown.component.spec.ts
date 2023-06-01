import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageBrownComponent } from './garbage-brown.component';

describe('GarbageBrownComponent', () => {
  let component: GarbageBrownComponent;
  let fixture: ComponentFixture<GarbageBrownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarbageBrownComponent]
    });
    fixture = TestBed.createComponent(GarbageBrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
