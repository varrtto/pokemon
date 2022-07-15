import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

export const FavoriteCardPokemon: React.FC<{ id: number }> = ({ id }) => {
  const router = useRouter();
  const onFavoriteClick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={onFavoriteClick}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={"140px"}
        />
      </Card>
    </Grid>
  );
};
