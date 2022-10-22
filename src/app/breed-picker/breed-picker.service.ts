import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Status {
  status: string;
}

export interface BreedImageRandom extends Status {
  message: string;
}

export interface BreedList extends Status {
  message: { [key: string]: string[] };
}

export interface BreedImage extends Status {
  message: string[];
}

@Injectable()
export class BreedService {
  breedListUrl = 'https://dog.ceo/api/breeds/list/all';

  constructor(private http: HttpClient) {}

  getBreedList() {
    return this.http.get<BreedList>(this.breedListUrl);
  }
  getBreedImage(breed: string) {
    return this.http.get<BreedImage>(
      `https://dog.ceo/api/breed/${breed}/images`
    );
  }
  getRandomImage(breed: string) {
    return this.http.get<BreedImageRandom>(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
  }
}
