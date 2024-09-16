import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucuralDirectiveComponent } from './strucural-directive.component';

describe('StrucuralDirectiveComponent', () => {
  let component: StrucuralDirectiveComponent;
  let fixture: ComponentFixture<StrucuralDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrucuralDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrucuralDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
