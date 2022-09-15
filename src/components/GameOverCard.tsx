import React from 'react';
import './GameOverCard.css'

const GameOverCard = (props: any) => {

  const clickRestart = () => {
    props.clickRestart()
  }
	return (
		<div className='gameOver'>
			<h2>GameOver! press button to re-start!</h2>
			<button onClick={clickRestart} type='button'>
				{'Restart!!'}
			</button>
		</div>
	);
};

export default GameOverCard;
