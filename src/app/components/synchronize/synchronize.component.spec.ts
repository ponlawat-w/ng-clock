import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizeComponent } from './synchronize.component';

describe('SynchronizeComponent', () => {
  let component: SynchronizeComponent;
  let fixture: ComponentFixture<SynchronizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynchronizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchronizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
