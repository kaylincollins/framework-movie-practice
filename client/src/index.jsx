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


  render() {
    return (
      <div>
      <AddMovie onChange={this.onAdd.bind(this)} onClick={this.handleAdd.bind(this)}/>
      <Search onChange={this.onChange.bind(this)} onClick={this.handleSearch.bind(this)}/>
      { this.state.list.map((movie, index) =>
      	<Movie movie={movie} key={index}/>
      	)
      }

      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
