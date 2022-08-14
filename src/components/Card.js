import React, { useState, useEffect } from 'react';
// const Pokedex = require('pokeapi-js-wrapper');
// import { Pokedex } from 'pokeapi-js-wrapper';
// const pokedex = new Pokedex();

const Card = (props) => {
	const { id, clickCard, card } = props;
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
	}, [props]);

	return (
		<>
			<div className='card' onClick={clicked}>
				<p>{card.name}</p>
				<div>
					<img src={card.src} alt='pokemon card' />
				</div>
				{/* Card {props.id} */}
			</div>
		</>
	);
};

export default Card;
