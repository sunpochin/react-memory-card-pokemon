import React, { useState } from 'react';
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

const Card = (props) => {
	const { id, clickCard, name } = props;
	const clicked = () => {
		clickCard(id);
		// console.log('click card');
	};
	// console.log('name: ', name);

	const [pokemonImg, setPokemon] = useState(null);

	(async () => {
		console.log('name: ', name);
		const pokemonIns = await P.getPokemonByName('name');
		console.log(pokemonIns);
		console.log(pokemonIns.sprites.front_default);
		setPokemon(pokemonIns.sprites.front_default);
	})();

	return (
		<>
			<div className='card' onClick={clicked}>
				<img src={pokemonImg} alt='pokemon' />
				{/* Card {props.id} */}
			</div>
		</>
	);
};

export default Card;
