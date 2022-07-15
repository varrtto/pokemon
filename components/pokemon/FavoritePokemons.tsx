import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

export const FavoritePokemons: React.FC<{ favortitePokemons: number[] }> = ({
  favortitePokemons,
}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favortitePokemons.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
