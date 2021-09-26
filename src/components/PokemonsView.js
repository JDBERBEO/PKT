import React from 'react'
import { Link } from 'react-router-dom'

export const PokemonsView = ({pokemons}) => {
  console.log('poke: ', pokemons)
  return (
    <div className='container'> 
      <div className='row'>
        {!!pokemons && pokemons.length > 0 && pokemons.map((pokemon) => (
          <div key={pokemon.id} className='col'>
          <div class="card" style={{width : '18rem'}}>
            <img src={pokemon.sprites.front_shiny} class="card-img-top"/>
            <div class="card-body">
            <h5 class="card-title">Cname: {pokemon.name}</h5>
            <Link to={`/${pokemon.id}`} > see more info </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
