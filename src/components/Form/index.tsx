import React, { SyntheticEvent, useCallback, useRef, useState } from 'react';
import Input from '../Input';

import './index.css'
import Button from '../Button';

type FormProps = {
  setError: React.Dispatch<React.SetStateAction<boolean>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setShorted: React.Dispatch<React.SetStateAction<string>>
}

let timer: number;

const Form: React.FC<FormProps> = ({setShorted}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [link, setLink] = useState<string>('')


  const handleInputChange = useCallback((event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() =>{
      if(target.value.length){
        setLink(target?.value)
      } else {
        setLink('')
      }
    },1000)
    
  },[])



  const handleClick = useCallback(() => {
    console.log('fazer requisição para encurtador...')
    setShorted('https://meu-site/dj23ls3')
  },[setShorted])

  return (
    <div className="container-form">
        <h2 style={{textAlign:'center'}}>
          <span>Encur<s>tador</s></span> de link
        </h2>    
        <Input 
          ref={inputRef}
          className="input-short"
          type="url"
          name="input-short"
          placeholder="Cole o seu link aqui"
          id="input-short" 
          onChange={handleInputChange}
        />
        <Button onClick={handleClick} className='form-to-short' disabled={!link}>
          Encurtar
        </Button>
      </div>
  )
}

export default Form;