import React, { useEffect, useState, useMemo } from 'react';
import Card from './Card';
import listOfPokemon from '../pokemon-list';

const CardHolder = () => {
	const [cardIds, setCardIds] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("");
	// console.log('card holder');
  let someArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

	function randomArrayShuffle(array) {
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
	
	useEffect(() => {
		console.log('useEffect');
		randomArrayShuffle(someArray);
		console.log('someArray: ', someArray);
		setCardIds(someArray);
	}, []);
	// console.log('cardIds: ', cardIds);

  useEffect(() => {
		// console.log('cardIds: ', cardIds);
    console.log('clicked: ', clicked);
    console.log('score: ', score);
  }, [clicked, score]);

	const clickCard = (id) => {
    console.log(Array(clicked) );
    const found = clicked.find(element => element === id);
    console.log('found: ', found);
    if (undefined !== found ) {
      console.log('game over: ', id);
      setGameState("game over");
      setScore(0);
      setClicked([]);
      return;
    }
    setClicked((prevClicked) => {
      return prevClicked.concat(id);
    });
		randomArrayShuffle(someArray);
    setCardIds(someArray);
    setScore((prevScore) => {
      return prevScore + 1;
    })
		// console.log('click card holder: ', clicked);
	};

	const cards = cardIds.map((id) => (
		<Card key={id} id={id} pokeName={listOfPokemon[id]} clickCard={clickCard} />
	));

	return (
		<>
			<div className='card-holder'>{cards}</div>
			<div className='score'>Score: {score}</div>
			<div className='gameState'>{gameState}</div>
		</>
	);
};

export default CardHolder;
