import { Card, Grid } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import {NoFavorites} from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage = () => {
  const [favortitePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  return (
    <Layout title="Pokemons - Favoritos">
      {favortitePokemons.length === 0 ? <NoFavorites /> : 
        (
          <Grid.Container gap={2} direction='row' justify='flex-start'>
            {favortitePokemons.map((id) => (
              <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                <Card hoverable clickable css={{ padding: 10}}>
                  <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} width={'100%'} height={'140px'}/>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        )}
      
    </Layout>
  )
}

export default FavoritesPage