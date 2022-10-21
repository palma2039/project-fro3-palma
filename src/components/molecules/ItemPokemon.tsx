import React from 'react'
import { IPokemon } from '../model/IPokemon';

export interface ItemPokemonProps {
    pokemon: IPokemon;
  }
export const ItemPokemon:React.FC<ItemPokemonProps> = ({pokemon}) => {
  return (
    <li>
        <div>{pokemon && <h1>Pokemon: {pokemon.name}</h1>}</div>
        <div>
            <h3>Url: {pokemon.url}</h3>
        </div>
    </li>
  )
}