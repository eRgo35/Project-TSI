import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsXpComponent } from './windows-xp.component';

describe('WindowsXpComponent', () => {
  let component: WindowsXpComponent;
  let fixture: ComponentFixture<WindowsXpComponent>;

  beforeEach(async(() => {
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
