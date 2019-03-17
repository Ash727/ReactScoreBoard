import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}>
					✖
				</button>
				{props.name}
			</span>

			<Counter />
		</div>
	);
};

class App extends React.Component {
	state = {
		players: [
			{
				name: 'Guil',
				id: 1
			},
			{
				name: 'Treasure',
				id: 2
			},
			{
				name: 'Ashley',
				id: 3
			},
			{
				name: 'James',
				id: 4
			}
		]
	};

	handleRemovePlayer = (id) => {
		this.setState((prevState) => {
			return {
				players: prevState.players.filter((p) => p.id !== id)
			};
		});
	};

	render() {
		return (
			<div className="scoreboard">
				<Header title="Scoreboard" totalPlayers={this.state.players.length} />

				{/* Players list */}
				{this.state.players.map((player) => (
					<Player
						name={player.name}
						id={player.id}
						key={player.id.toString()}
						removePlayer={this.handleRemovePlayer}
					/>
				))}
			</div>
		);
	}
}

export default App;
