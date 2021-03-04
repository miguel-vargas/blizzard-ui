import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WowTokenComponent } from './wow-token.component';

describe('WowTokenComponent', () => {
  let component: WowTokenComponent;
  let fixture: ComponentFixture<WowTokenComponent>;

  beforeEach(async(() => {
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
