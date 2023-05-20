import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterByIdService {
  id: number = 0;

  constructor(private http: HttpClient) {}

  getCharacterById() {
    return this.http.get(
      'https://rickandmortyapi.com/api/character/' + this.id
    );
  }
}
