import React from 'react';

const AddMovie = (props) => (
  <div>
  	<input onChange={(e)=> props.onChange(e)}></input>
  	<button onClick={()=> props.onClick()}>Add</button>
  </div>
  )

export default AddMovie;