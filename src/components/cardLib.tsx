// import { Pokedex } from 'pokeapi-js-wrapper';
const Pokedex = require('pokeapi-js-wrapper');
const pokedex = new Pokedex();

// type Props = {
// 	ids: string[];
// };
type IDType = Object[];

type CardType = {
	id: string;
	name: string;
	src: string;
	title: string;
	sprites: Object[];
};

type CardsType = {
	id: string;
	name: string;
	src: string;
	title: string;
}[];


const fetchPokemonApi = (ids: IDType) => {
	console.log('ids: ', ids);
	const pro = Promise.all(ids.map((id) => pokedex.getPokemonByName(id)));
	return pro;
};

const fetchCardsImgs = (cards: CardsType) =>
	Promise.all(
		cards.map(
			({ src }) =>
				new Promise((resolve) => {
					const img = new Image();
					img.src = src;
					img.onload = () => resolve(src);
				})
		)
	);

const getCards = async (ids: IDType) => {
	const cards = await fetchPokemonApi(ids);
	console.log('fetchPokemonApi cards: ', cards);
	const brief = cards.map((card: CardType) => ({
		id: card.id,
		name: card.name,
		// src: card.sprites.other['official-artwork'].front_default,
		// src: card.sprites.back_default,
		// src: card.sprites.front_default,
		src: "",
		title: card.name,
	}));
	await fetchCardsImgs(brief);
	// setIsLoading(false);
	// console.log('cards: ', cards);
	console.log('brief: ', brief);
	return brief;
};

const updateCards = async (ids: IDType) => {
	const newCards = await getCards(ids);
	// setCards(newCards);
	console.log('newCards: ', newCards);
};

const CardsCollection = {
	// updateCards,
	getCards,
};

export { CardsCollection as default };
