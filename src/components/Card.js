import React from 'react'

const Card = (props) => {
	const {id, clickCard} = props;
  const clicked = () => {
		clickCard(id);
    // console.log('click card');
  }

  return (
		<>
			<div className='card' onClick={clicked}>
				Card {props.id}
			</div>
		</>
	);
}

export default Card

