import React,{useEffect} from 'react';
import Card from '../Card';

const CardList = ({ citiesList }) => {
	useEffect(() => {
		return () => {
			window.addEventListener('resize', () => {
			console.log('resize')
			})
			return () => {
				window.removeEventListener('resize');
			}
		}
	}, []);
	return (
		<div className="card-list">
				{citiesList.map((city) => (<Card city={city} />))}
		</div>
	);
}

export default CardList;
