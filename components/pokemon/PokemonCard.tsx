import { Card, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"

interface Props {
    pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
    const router = useRouter()

    const onClick = () => {
        router.push(`/pokemon/${pokemon.id}`)
    }

    return (
        <Card hoverable clickable onClick={onClick}>
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