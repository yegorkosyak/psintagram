import { Component, OnInit } from '@angular/core';
import {
  BreedList,
  BreedImage,
  BreedImageRandom,
  BreedService,
} from './breed-picker.service';

@Component({
  selector: 'app-breed-picker',
  templateUrl: './breed-picker.component.html',
  providers: [BreedService],
  styleUrls: ['./breed-picker.component.scss'],
})
export class BreedPickerComponent implements OnInit {
  error: any;
  breedData: any;
  breedImage!: string;
  selectedBreed: string = 'affenpinscher';

  constructor(private breedService: BreedService) {}

  setBreedList() {
    this.breedService.getBreedList().subscribe({
      next: (data: BreedList) => {
        this.breedData = Object.entries(data.message);
      },
      error: (error) => (this.error = error),
    });
  }

  setBreedImage(breed: string) {
    this.breedService.getBreedImage(breed).subscribe({
      next: (data: BreedImage) => {
        this.breedImage = data.message[0];
      },
      error: (error) => (this.error = error),
    });
  }

  setRandomImage(breed: string) {
    this.breedService.getRandomImage(breed).subscribe({
      next: (data: BreedImageRandom) => {
        this.breedImage = data.message;
      },
      error: (error) => (this.error = error),
    });
  }

  ngOnInit() {
    this.setBreedList();
    this.setBreedImage(this.selectedBreed);
  }
}
