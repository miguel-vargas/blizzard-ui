import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WowTokenCardComponent } from './wow-token-card.component';

describe('WowTokenCardComponent', () => {
  let component: WowTokenCardComponent;
  let fixture: ComponentFixture<WowTokenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WowTokenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WowTokenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
