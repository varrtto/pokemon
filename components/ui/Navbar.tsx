import { Spacer, Text, useTheme, Image, Link } from "@nextui-org/react";
import NextLink from 'next/link'

export const Navbar = () => {
    const { theme } = useTheme();


    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray100.value,
        }}>
            <NextLink href="/" passHref>
                <Link>
                    <Image
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg"
                        alt="Icono de la app"
                        width={50}
                        height={50}
                        css={{ padding: '5px' }}
                    />
                </Link>
            </NextLink>
            <NextLink href="/" passHref>
                <Link>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{
                flex: 1
            }} />
            <NextLink href="/favorites" passHref>
                <Link>
                    <Text color='white' >Favoritos</Text>
                </Link>
            </NextLink>

        </div>
    )
}
