import React, { ForwardedRef, InputHTMLAttributes, useState }  from 'react';
import './index.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>
type RefProps = ForwardedRef<HTMLInputElement>

const Input = React.forwardRef((props: InputProps, ref: RefProps) => {
  return (
  <input 
    {...props} 
    ref={ref}    
    data-testid={`input-${props.id}-testid`}
  />
  )
})

export default Input;