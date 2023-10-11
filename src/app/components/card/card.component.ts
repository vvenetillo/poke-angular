import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  pokemon: PokemonData 
  imgpoke:string = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"

  constructor(
    private service:PokemonService
  ) {
    this.pokemon ={
      id: 0,
      name: '',
      sprites:{
        front_default: ''
      },
      types: []
    }
  }

  ngOnInit(): void {
    this.getPokemon('')
  }

  getPokemon(searchName: string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
        },
        error: (err) => console.log('not found')
      } 
    )
  }
}
