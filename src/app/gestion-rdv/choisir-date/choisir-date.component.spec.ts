import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisirDateComponent } from './choisir-date.component';

describe('ChoisirDateComponent', () => {
  let component: ChoisirDateComponent;
  let fixture: ComponentFixture<ChoisirDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoisirDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoisirDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
