import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterByIdService } from '../service/character-by-id.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css'],
})
export class CharactersDetailsComponent implements OnInit {
  title: string = 'Character Details';
  id: number = 0;
  character: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private characterById: CharacterByIdService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      this.characterById.id = this.id;

      this.characterById.getCharacterById().subscribe((data) => {
        this.character = data;
      });
    });
  }

  return(){
    this.router.navigate(['/characters']);
  }
}
