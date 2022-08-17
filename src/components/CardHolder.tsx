import React, { useEffect, useState, useMemo } from 'react';
import Card from './Card';
//import listOfPokemon from '../pokemon-list';
import CardsCollection from './cardLib';

const CardHolder = () => {
	const [isLoading, setIsLoading] = useState(true);

	type TypeCard = {
		id: string;
		name: string;
		src: string;
		title: string;
	};

	const [cards, setCards] = useState<TypeCard[]>([]);
	const [clicked, setClicked] = useState([]);
	const [score, setScore] = useState(0);
	const [gameState, setGameState] = useState('');
	// console.log('card holder');
	let someArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

	function randomArrayShuffle(array: any[]) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}

  const updateCards = async (ids: string[]) => {
		const newCards = await CardsCollection.getCards(ids);
		setCards(newCards);
		console.log('newCards: ', newCards);
		setIsLoading(false);
	};

	useEffect(() => {
		console.log('useEffect');
		randomArrayShuffle(someArray);
		console.log('someArray: ', someArray);
		updateCards(someArray);
	}, []);
	// console.log('cardIds: ', cardIds);

	useEffect(() => {
		// console.log('cardIds: ', cardIds);
		console.log('clicked: ', clicked);
		console.log('score: ', score);
	}, [clicked, score]);

	const clickCard = (id: any) => {
		console.log('clicked: ', Array(clicked));
		const found = clicked.find((element) => element === id);
		console.log('found: ', found);
		if (undefined !== found) {
			console.log('game over: ', id);
			setGameState('game over');
			setScore(0);
			setClicked([]);
			return;
		}
		setClicked((prevClicked) => {
			return prevClicked.concat(id);
		});
		randomArrayShuffle(someArray);
		updateCards(someArray);
		setScore((prevScore) => {
			return prevScore + 1;
		});
		// console.log('click card holder: ', clicked);
	};

	const mappedCards = cards.map((card: TypeCard) => (
		<Card
			key={card.id}
			id={card.id}
			card={card}
			clickCard={clickCard}
		/>
	));

	const rend = (
		<div>
			{isLoading ? (
				<div className='loading'>Loading...</div>
			) : (
				<div>
					<div className='card-holder'>{mappedCards}</div>
					<div className='score'>Score: {score}</div>
					<div className='gameState'>{gameState}</div>
				</div>
			)}
		</div>
	);
	return (
		rend
	);
};

export default CardHolder;
