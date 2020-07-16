import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DotnetCoreTokensComponent } from './dotnet-core-tokens.component';

describe('DotnetCoreTokensComponent', () => {
  let component: DotnetCoreTokensComponent;
  let fixture: ComponentFixture<DotnetCoreTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotnetCoreTokensComponent ],
      imports: [
        HttpClientTestingModule
      ]
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
