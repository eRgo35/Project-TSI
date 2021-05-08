import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WindowsXpComponent } from './windows-xp.component';

describe('WindowsXpComponent', () => {
  let component: WindowsXpComponent;
  let fixture: ComponentFixture<WindowsXpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsXpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowsXpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
