import React, { useEffect, useState } from 'react';
import Card from './Card';
// import '../styles/App.css';

const CardHolder = () => {
	const [cardIds, setCardIds] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("");
  // let clickedCards = [];

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

  let someArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
	useEffect(() => {
		setCardIds(someArray);
		randomArrayShuffle(someArray);
    console.log('someArray: ', someArray);
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
		<Card key={id} id={id} clickCard={clickCard} />
	));

	return (
		<div>
			<div className='card-holder'>{cards}</div>
			<div className='score'>Score: {score}</div>
			<div className='gameState'>{gameState}</div>
		</div>
	);
};

export default CardHolder;
