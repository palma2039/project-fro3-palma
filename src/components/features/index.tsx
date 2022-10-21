import React from 'react'
import { ProtectedPage } from '../layouts/ProtectedPage'
import { ListaPokemons } from '../organisms/ListaPokemons'

export const Index = () => {
  return (
    <ProtectedPage>
        <ListaPokemons />
    </ProtectedPage>
    
  )
}
