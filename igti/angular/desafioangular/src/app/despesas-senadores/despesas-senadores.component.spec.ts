import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasSenadoresComponent } from './despesas-senadores.component';

describe('DespesasSenadoresComponent', () => {
  let component: DespesasSenadoresComponent;
  let fixture: ComponentFixture<DespesasSenadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesasSenadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesasSenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
