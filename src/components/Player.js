import React from 'react';
import Counter from './Counter';
const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>
					✖
				</button>
				{props.name}
			</span>

			<Counter 
			 Schange = {props.ScoreChange}
			  id = {props.id} score = {props.score} 
			  index = {props.index}/>
		</div>
	);
};

export default Player;
