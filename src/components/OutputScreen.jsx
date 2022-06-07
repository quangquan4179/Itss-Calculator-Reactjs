import React from 'react'
import PropTypes from 'prop-types'
import OutputScreenRow from './OutputScreenRow'

const OutputScreen = ({question,answer}) => {
  return (
    <div>
        <OutputScreenRow values={question}/>
        <OutputScreenRow values={answer}/>
    </div>
  )
}

OutputScreen.propTypes = {}

export default OutputScreen