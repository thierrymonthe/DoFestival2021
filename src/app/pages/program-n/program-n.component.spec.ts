import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNComponent } from './program-n.component';

describe('ProgramNComponent', () => {
  let component: ProgramNComponent;
  let fixture: ComponentFixture<ProgramNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
