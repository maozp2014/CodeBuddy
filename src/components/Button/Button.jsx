import React from 'react'
import './Button.css'

const Button = ({ 
  children, 
  variant = 'default', 
  disabled = false, 
  onClick,
  type = 'button',
  ...props 
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${disabled ? 'btn-disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button