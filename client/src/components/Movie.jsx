import React from 'react';
import ListItem from './MovieDetails.jsx';

class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			watched: false
		}
	}

	toggleWatched() {
		this.setState({
			watched: !this.state.watched
		})
	}

	render () {
		return (
			<div>
  			<div>{this.props.movie.title}	</div>
  			<button onClick={this.toggleWatched.bind(this)}>{this.state.watched ? 'Watched' : 'To Be Watched'}</button>
  		</div>
  	)
	}
}

export default Movie;

