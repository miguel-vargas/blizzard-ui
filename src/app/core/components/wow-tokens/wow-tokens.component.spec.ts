import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WowTokensComponent } from './wow-tokens.component';

describe('WowTokensComponent', () => {
  let component: WowTokensComponent;
  let fixture: ComponentFixture<WowTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowTokensComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
