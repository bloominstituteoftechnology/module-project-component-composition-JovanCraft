import React from "react";

const Figure = ({url, date}) => {
  return (
    <figure>
      <img src={url} />
      <figcaption className="caption">
        This beautiful pic was taken on {date}
      </figcaption>
    </figure>
  );
};

export default Figure
