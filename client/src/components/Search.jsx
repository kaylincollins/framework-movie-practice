import React from 'react';

const Search = (props) => (
  <div>
  	<input placeholder="search..." onChange={(e)=> props.onChange(e)}></input>
  	<button onClick={()=> props.onClick()}>Search</button>
  </div>
  )

export default Search;