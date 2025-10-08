import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompA } from './comp-a';

describe('CompA', () => {
  let component: CompA;
  let fixture: ComponentFixture<CompA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
