interface IPokemon {
	id: number;
	name: string;
	image: string;
	type: string;
}

const showPokemon = (pokemon: IPokemon): void => {
	let output: string = `
        <div class="card">
            <span class="card--id">#${pokemon.id}</span>
            <img class="card--image" src=${pokemon.image} alt=${pokemon.name} />
            <h1 class="card--name">${pokemon.name}</h1>
            <span class="card--details">${pokemon.type}</span>
        </div>
    `;
  console.log('output: ', output);
	// container.innerHTML += output;
};


const getPokemon = async (id: number): Promise<void> => {
	const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const pokemon: any = await data.json();
	const pokemonType: string = pokemon.types
		.map((poke: any) => poke.type.name)
		.join(', ');

	const transformedPokemon = {
		id: pokemon.id,
		name: pokemon.name,
		image: `${pokemon.sprites.front_default}`,
		type: pokemonType,
	};

	showPokemon(transformedPokemon);
};

const getCards = async () => {
  return [];
}

const TsLib = {
	getPokemon,
	getCards,
};

export { TsLib as default };
