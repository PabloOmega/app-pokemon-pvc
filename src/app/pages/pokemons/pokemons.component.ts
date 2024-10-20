import { Component } from '@angular/core';
import { Pokemon, PokemonURL } from '../../types/pokemon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as pokemonData from "../../../../public/pokemonData.json";
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons : Pokemon[] = [];
  pages: number[] = [];
  currentPage: number = 1;

  constructor(private router: Router, private pokemonsService: PokemonsService) {
    this.pages = Array(66).fill(0).map((_, i) => i + 1);
  }

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

  onClickPage(page: number): void{
    this.currentPage = page;
    this.pokemons = [];
    this.pokemonsService.getPokemons((page - 1) * 20).subscribe(pokemonResponse => {
      this.getPokemons(pokemonResponse.results);
    });    
  }

  onClickNextPrevious(previous: boolean): void{
    this.currentPage += previous ? -1 : 1;
    this.pokemons = [];
    this.pokemonsService.getPokemons((this.currentPage - 1) * 20).subscribe(pokemonResponse => {
      this.getPokemons(pokemonResponse.results);
    });        
  }

  public imprimirMensaje(){
    console.log("Imprimir Mensaje");
  }

  public abrirPokemon(id: number){
    this.router.navigate(["/pokemons", id]);
  }
}
