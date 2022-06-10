import React from 'react'
import PropTypes from 'prop-types'

const OutputScreenRow = ({values}) => {
  return (
    <div className='w-96 bg-[#ffffff]'>
      <input type='text' readOnly value={values}  className='border-2 mt-5' />
    </div>
  )
}

OutputScreenRow.propTypes = {
    
}

export default OutputScreenRow