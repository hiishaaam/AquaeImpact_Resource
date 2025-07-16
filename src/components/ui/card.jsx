import React from 'react'

const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-4 border rounded shadow-sm ${className}`}>
      {children}
    </div>
  )
}


export const CardContent = ({ children, className = '' }) => (
  <div className={`mt-2 ${className}`}>
    {children}
  </div>
)

export default Card
