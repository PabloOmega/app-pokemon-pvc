import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonURL } from '../../types/pokemon';
import * as pokemonData from "../../../../public/pokemonData.json";
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pokemons : Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.getPokemons().subscribe(pokemonResponse => {
      this.getPokemons(pokemonResponse.results);
    });
  }

  getPokemons(pokemonResults: PokemonURL[]): void {
    for(const pokemon of pokemonResults){
      this.pokemonsService.getPokemon(pokemon.name).subscribe(pokemon => {
        this.pokemons.push(pokemon);
      })
    }
  }  
}
