import React from 'react'
import PropTypes from 'prop-types'

function Load({ onLoadClick }) {
  return (
    <>
      <button onClick={onLoadClick}>Fetch Quotes</button>
    </>
  )
}

Load.propTypes = {
  onLoadClick: PropTypes.func.isRequired
}

export default Load;
