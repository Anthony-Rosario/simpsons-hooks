import React from 'react'
import PropTypes from 'prop-types'

function Quote({ simpQuotes }) {
  const { character, quote, image } = simpQuotes;
  return (
    <div>
      <img alt={character} src={image} />
      <h5>{quote}</h5>
    </div>
  )
}

Quote.propTypes = {
  simpQuotes: PropTypes.shape({
    character: PropTypes.string,
    quote: PropTypes.string,
    image: PropTypes.string,
  }).isRequired
}

export default Quote;
