import React from 'react'
import PropTypes from 'prop-types'

import './feature.css'

const Feature = ({ title, text }) => {
  Feature.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
  }

  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-text'>
        {text}
      </div>
    </div>
  )
}

export default Feature
