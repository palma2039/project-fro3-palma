import React from 'react';
import { IPokemon } from '../model/IPokemon';
import { ItemPokemon } from '../molecules/ItemPokemon';
import { IResource } from '../model/IResourse';

export const ListaPokemons = () => {
    const [cargando, setCargando] = React.useState(true);
    const [pokemons, setPokemons] = React.useState<IPokemon[] | undefined>(undefined);
    const [resourse, setResourse] = React.useState<IResource | undefined>(undefined);

    async function getData() {
        try {
          const [respuestResource] = await Promise.all([
            fetch("https://pokeapi.co/api/v2/pokemon"),
          ]);
    
          const [datosResource] = await Promise.all([
            respuestResource.json(),
          ]);
          
          setResourse(datosResource);
          setPokemons(datosResource.results);
          console.log(pokemons);
          setCargando(false);
        } catch (error) {
          console.log(error);
        }
      }

    React.useEffect(() => {
        getData();
    }, []);
    
  return (
    <div>        
        {cargando ? (<p>Estoy cargando espere un momento...</p>) : (
          <>
            <ol>
              {pokemons &&
                pokemons.map((pokemon, index) => (
                  <ItemPokemon
                    key={pokemon.id}
                    pokemon={pokemon}   
                  />
                ))}
            </ol>        
            <p><a href={resourse?.previous}>Previous</a> -- <a href={resourse?.next}>Next</a></p>  
          </>          
        )}
    </div>
  )
}
