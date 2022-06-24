import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgifNgforComponent } from './diretivas-ngif-ngfor.component';

describe('DiretivasNgifNgforComponent', () => {
  let component: DiretivasNgifNgforComponent;
  let fixture: ComponentFixture<DiretivasNgifNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasNgifNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasNgifNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
