import React, { useState } from 'react'
import Load from '../../components/app/quote/Load'
import Quote from '../../components/app/quote/Quote'
import { getQuote } from '../../services/simpsonsApi'

export default function SimpsonsQuote() {
  const [quote, setQuote] = useState({});

  const handleLoadClick = () => {
    getQuote().then(result => setQuote(result[0]));
  }

  return (
    <div>
      <Load onLoadClick={handleLoadClick} />
      <Quote simpQuotes={quote} />
    </div>
  )
}

