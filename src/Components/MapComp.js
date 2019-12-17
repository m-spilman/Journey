import React from "react";
const Map = props => {
  if(props.map==='map2') return <div className='map2' alt="board"></div>;

  else return <div className='map1' alt="board"></div>;
}

export default Map;


