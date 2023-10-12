import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumToObjCompareComponent } from './enum-to-obj-compare.component';

describe('EnumToObjCompareComponent', () => {
  let component: EnumToObjCompareComponent;
  let fixture: ComponentFixture<EnumToObjCompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnumToObjCompareComponent]
    });
    fixture = TestBed.createComponent(EnumToObjCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
