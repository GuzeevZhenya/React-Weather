import React from 'react'

export default function Card(props) {
	return (
		<div className="card">
			<div className="main-info">
				<img className="icon" alt="icon"></img>
				<div className="title">{props.city}</div>
				<div className="description">Cloud</div>
				<div className="temperature">20</div>
			</div>
			<div className="information">
				<div>Himidity:15</div>
				<div>Feels like:15</div>
			</div>
		</div>
	)
}
