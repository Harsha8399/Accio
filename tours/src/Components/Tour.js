import React, { useState } from "react";

function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setreadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.subString(0, 200)}...`}
          <button onClick={() => setreadMore(!readMore)}>
            {readMore ? "show less" : "Read More..."}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
