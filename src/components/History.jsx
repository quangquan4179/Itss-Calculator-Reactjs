import React from 'react'
import PropTypes from 'prop-types'
import useStorage from '../hooks/storage'


const History = props => {
    const items = props.history
  return (
    <div>{items.map(item => (<p>{item.question}={item.answer}</p>))}</div>
  )
}

export default History
