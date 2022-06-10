import React from 'react'
import PropTypes from 'prop-types'

const CalculatorTitle = ({title}) => {
  return (
    <div className='text-lg font-medium'>{title}</div>
  )
}

CalculatorTitle.propTypes = {
    title: PropTypes.string
}

export default CalculatorTitle