import React from 'react';
import Card from '../Card';

const CardList = ({citiesList}) => {
	return (
		<div className="card-list">
				{citiesList.map((city) => (<Card city={city} />))}
		</div>
	);
}

export default CardList;
