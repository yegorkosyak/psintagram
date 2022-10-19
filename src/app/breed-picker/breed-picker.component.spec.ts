import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedPickerComponent } from './breed-picker.component';

describe('BreedPickerComponent', () => {
  let component: BreedPickerComponent;
  let fixture: ComponentFixture<BreedPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreedPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
