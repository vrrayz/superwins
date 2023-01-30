import React from 'react'

import spinner from '../assets/img/spinner-blue.svg'

export const LoadingScreen = () => {
  return (
    <div className='loading-overlay'>
        <div className="loading-box">
            <img src={spinner} alt="spinner" className='spinner' />
        </div>
    </div>
  )
}
