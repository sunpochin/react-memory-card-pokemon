import React, { useEffect, useState, useRef, useMemo } from 'react';
import Card from './Card';
// import listOfPokemon from '../pokemon-list.js';
// import CardsCollection from './cardLib';
import TsLib, { IPokemon } from './TsLib';
import GameOverCard from './GameOverCard';

const CardHolder = () => {
	// const [renderCount, setRenderCount] = useState(0);
	const renderCount = useRef(0); // { current: 0 }

	const [isLoading, setIsLoading] = useState(true);

	const [cards, setCards] = useState<IPokemon[]>([]);
	const [clicked, setClicked] = useState<string[]>([]);
	const [score, setScore] = useState(0);
	const [gameState, setGameState] = useState('playing');
	// console.log('card holder');
	let someArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

	function randomArrayShuffle(array: string[]) {
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
		const newCards = await TsLib.getCards(ids);
		setCards(newCards);
		console.log('newCards: ', newCards);
		setIsLoading(false);
	};

	useEffect(() => {
		console.log('renderCount: ', renderCount);
		renderCount.current += 1;
		// setRenderCount((prev) => prev + 1);
	});

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

	const clickCard = (id: string) => {
		console.log('clicked: ', Array(clicked));
		const found = clicked.find((element) => element === id);
		console.log('found: ', found);
		if (undefined !== found) {
			console.log('game over: ', id);
			setGameState('game over');
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

	const mappedCards = cards.map((card) => (
		<Card key={card.id} id={card.id} card={card} clickCard={clickCard} />
	));

	const clickRestart = () => {
		setGameState('playing');
		setScore(0);
	};

	const rend = (
		<div>
			<p>renderCount: {renderCount.current}</p>
			{isLoading ? (
				<div className='loading'>Loading...</div>
			) : (
				<div>
					<div className='score'>目前分數： {score}</div>
					{gameState == 'game over' ? (
						<GameOverCard clickRestart={clickRestart} />
					) : (
						<div className='card-holder'>{mappedCards}</div>
					)}

					{/* <div className='gameState'>{gameState}</div> */}
				</div>
			)}
		</div>
	);
	return rend;
};;

export default CardHolder;
