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
			], 
			search: '',
			add: ''
		}
  }

  onChange(e) {
  	this.setState({
  		search: e.target.value
  	})
  }

  handleSearch() {
  	var matchedMovies = [];
  	for (var i = 0; i < this.state.list.length; i++ ){
  		if (this.state.list[i].title === this.state.search) {
  			matchedMovies.push(this.state.list[i]);
  		}
  	}
  	if (matchedMovies.length === 0) {
  		matchedMovies.push({title: 'No Movies found under that name'})
  	}
  	this.setState({
  		list: matchedMovies,
  		search: ''
  	})
  }

 	onAdd(e) {
  	this.setState({
  		add: e.target.value
  	})
  }

  handleAdd() {
  	this.setState({
  		list: this.state.list.concat({title: this.state.add})
  	})
  }

  filterWatched() {

  }


  render() {
    return (
      <div>
      <AddMovie onChange={this.onAdd.bind(this)} onClick={this.handleAdd.bind(this)}/>
      <Search onChange={this.onChange.bind(this)} onClick={this.handleSearch.bind(this)}/>
      <button> Watched </button>
      <button> To Be Watched </button>
      { this.state.list.map((movie, index) =>
      	<Movie movie={movie} key={index}/>
      	)
      }

      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
