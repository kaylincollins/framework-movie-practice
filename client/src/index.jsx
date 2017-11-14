import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	list: [
			  {title: 'Mean Girls'},
			  {title: 'Hackers'},
			  {title: 'The Grey'},
			  {title: 'Sunshine'},
			  {title: 'Ex Machina'},
			]
		}
  }


  render() {
    return (
      <div>
      <AddMovie />
      <Search />
      { this.state.list.map((movie, index) =>
      	<Movie movie={movie} key={index}/>
      	)
      }

      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
