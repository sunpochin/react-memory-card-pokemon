import { useEffect } from 'react';

type Props = {
	id: string;
	clickCard: Function;
	card: {
		src: string;
		name: string;
	};
};

const Card = ({ id, clickCard, card }: Props) => {
	// const { id, clickCard, card } = props;
	const clicked = () => {
		clickCard(id);
		console.log('click card: ', id);
	};
	// console.log('name: ', name);

	useEffect(() => {
		(async () => {
			// console.log('name: ', props.card.name, ', src: ', props.card.src);
			// const pokemonIns = await pokedex.getPokemonByName(props.pokeName.name);
			// // const pokemonIns = await P.getPokemonByName(`${props.pokeName}`);
			// // console.log(pokemonIns);
			// // console.log(pokemonIns.sprites.front_default);
			// setPokemon(pokemonIns.sprites.front_default);
		})();
	}, []);

	// https://stackoverflow.com/questions/64356404/getting-error-ts17004-cannot-use-jsx-unless-the-jsx-flag-is-provided
	return (
		<div>
			<div className='card' onClick={clicked}>
				<p>{card.name}</p>
				<div>
					<img src={card.src} alt='pokemon card' />
				</div>
				{/* Card {props.id} */}
			</div>
		</div>
	);
};

export default Card;
