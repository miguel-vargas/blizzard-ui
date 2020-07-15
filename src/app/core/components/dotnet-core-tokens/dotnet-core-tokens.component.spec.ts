import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetCoreTokensComponent } from './dotnet-core-tokens.component';

describe('DotnetCoreTokensComponent', () => {
  let component: DotnetCoreTokensComponent;
  let fixture: ComponentFixture<DotnetCoreTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotnetCoreTokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotnetCoreTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
