import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZuluComponent } from './zulu.component';

describe('ZuluComponent', () => {
  let component: ZuluComponent;
  let fixture: ComponentFixture<ZuluComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ZuluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
