import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BreedPickerComponent } from './breed-picker.component';

describe('BreedPickerComponent testing', () => {
  let component: BreedPickerComponent;
  let fixture: ComponentFixture<BreedPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    fixture = TestBed.createComponent(BreedPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('works', () => {
    expect(component).toBeTruthy();
  });
});
