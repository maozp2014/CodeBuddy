import React from 'react'
import './Card.css'

const Card = ({ title, children, ...props }) => {
  return (
    <div className="card" {...props}>
      {title && <div className="card-header">{title}</div>}
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default Card