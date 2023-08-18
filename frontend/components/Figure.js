import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width: 60%;

  figcaption {
    font-style: italic;
  }

`

const Figure = ({url, date}) => {
  return (
    <StyledFigure>
      <img src={url} />
      <figcaption className="caption">
        This beautiful pic was taken on {date}
      </figcaption>
    </StyledFigure>
  );
};

export default Figure
