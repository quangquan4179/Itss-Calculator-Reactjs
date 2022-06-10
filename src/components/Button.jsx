import React from 'react'

const Button = ({className,label, handleClick}) => {
  return (
    <input className={className} type="button " value={label} readOnly onClick={handleClick}/>
  )
}



export default Button