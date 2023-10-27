import React, { ButtonHTMLAttributes } from 'react';
import './index.css'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} type="button">
  {props.children}
</button>
}

export default Button;