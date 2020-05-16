import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamComponent } from './anam.component';

describe('AnamComponent', () => {
  let component: AnamComponent;
  let fixture: ComponentFixture<AnamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
