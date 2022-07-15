import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { FavoritePokemons } from "../../components/pokemon";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favortitePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);
  return (
    <Layout title="Pokemons - Favoritos">
      {favortitePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favortitePokemons={favortitePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
