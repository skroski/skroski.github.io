import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterchangeComponent } from './counterchange.component';

describe('CounterchangeComponent', () => {
  let component: CounterchangeComponent;
  let fixture: ComponentFixture<CounterchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
