
type Type = {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

type Sprites = {
    front_default: string,
    back_default: string,
    front_shiny: string,
    back_shiny: string,
    front_female: string,
    back_female: string,
    front_shiny_female: string,
    back_shiny_female: string
}

export type Pokemon = {
    id: number,
    name: string,
    weight: number,
    height: number,
    types: Type[],
    sprites: Sprites 
}

export type PokemonURL ={
    name: string,
    url: string,
}

export type PokemonResponse = {
    count: number,
    next: string,
    previous: string,
    results: PokemonURL[]
}