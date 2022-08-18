// import { Pokedex } from 'pokeapi-js-wrapper';

// const pokedex = new Pokedex();

// const fetchPokemonApi = (ids) => {
// 	console.log('ids: ', ids);
// 	const pro = Promise.all(ids.map((id) => pokedex.getPokemonByName(id)));
// 	return pro;
// };

// const fetchCardsImgs = (cards) =>
// 	Promise.all(
// 		cards.map(
// 			({ src }) =>
// 				new Promise((resolve) => {
// 					const img = new Image();
// 					img.src = src;
// 					img.onload = () => resolve(src);
// 				})
// 		)
// 	);

// const getCards = async (ids) => {
// 	const cards = await fetchPokemonApi(ids);
// 	console.log('fetchPokemonApi cards: ', cards);
// 	const brief = cards.map((card) => ({
// 		id: card.id,
// 		name: card.name,
// 		// src: card.sprites.other['official-artwork'].front_default,
// 		// src: card.sprites.back_default,
// 		src: card.sprites.front_default,
// 	}));
// 	await fetchCardsImgs(brief);
// 	// setIsLoading(false);
// 	// console.log('cards: ', cards);
// 	console.log('brief: ', brief);
// 	return brief;
// };

// const updateCards = async (ids) => {
// 	const newCards = await getCards(ids);
// 	// setCards(newCards);
// 	console.log('newCards: ', newCards);
// };

// const CardsCollection = {
// 	// updateCards,
// 	getCards,
// };

// export { CardsCollection as default };
