import React from 'react'
import PropTypes from 'prop-types'

const Button = ({className,label, handleClick}) => {
  return (
    <input className={className} type="button " value={label} readOnly onClick={handleClick}/>
  )
}

Button.propTypes = {}

export default Button