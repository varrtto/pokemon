import { Card, Row, Text } from "@nextui-org/react"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"

interface Props {
    pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
    return (
        <Card hoverable clickable>
            <Card.Body css={{ p: 1 }}>
                <Card.Image src={pokemon.img} width="100%" height={140} />
            </Card.Body>
            <Card.Footer>
                <Row justify='space-between'>
                    <Text transform='capitalize'>{pokemon.name}</Text>
                    <Text>#{pokemon.id}</Text>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default PokemonCard