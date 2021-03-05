import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WowTokenComponent } from './wow-token.component';

describe('WowTokenComponent', () => {
  let component: WowTokenComponent;
  let fixture: ComponentFixture<WowTokenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WowTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
