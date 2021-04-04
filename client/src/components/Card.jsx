import React from 'react';


function Card(props) {
  const {title, image} = props; 

  return (
    <div className="card">
      <img src={image} alt={title} />
      {/* {title} */}
    </div>
  );

}

export default Card;