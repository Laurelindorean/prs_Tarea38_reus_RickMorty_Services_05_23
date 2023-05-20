import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../service/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{
  title:string="Characters";
  characters: any =null;
  shuffledCharacters:any=null;

  constructor(private charactersService: CharactersService, private router: Router) {

  }
  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(data =>{
      this.characters =data;
      this.shuffledCharacters = this.shuffleArray(this.characters.results);
    })
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  seeMore(id:number){
    this.router.navigate(['/characters', id]);
  }

}
