import React from 'react'

function Movieheading(props) {
  return (
      <div className="col mb-4 mt-1 text-center ">
        <h3>{props.heading}</h3>
      </div>
  );
}

export default Movieheading