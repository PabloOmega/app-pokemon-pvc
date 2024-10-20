import { Component } from '@angular/core';
import { Pokemon } from '../../types/pokemon';
import * as pokemonData from "../../../../public/pokemonData.json";
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemon?: Pokemon;
  id: number = 0;

  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    })
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void{
    this.pokemonsService.getPokemon(this.id).subscribe(pokemon => {
      this.pokemon = pokemon;
    })
  }
}
