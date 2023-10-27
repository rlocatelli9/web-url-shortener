import React, { useEffect, useRef, useState } from 'react';
import Input from '../Input';
import './index.css'
import Button from '../Button';

type ResultProps = {
  value: string
}

const Result: React.FC<ResultProps> = ({value}) => {
  const [copied, setCopied] = useState(false)
  const resultRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let timer: number;
    if(copied){
      timer = setTimeout(() =>{
        setCopied(false)
      },2000)
    }
    return () => clearTimeout(timer)
  }, [copied])

  useEffect(() => {
    if(value && resultRef.current) {
      resultRef.current.value = value
    }
  },[value])

  const handleClipboard = () => {
    const copyText = document.getElementById("shorted-link") as HTMLInputElement
    if(copyText){
      copyText.select();
      copyText.setSelectionRange(0, 99999);      
      navigator.clipboard.writeText(copyText.value);
      setTimeout(() => {
        setCopied(true)
      }, 500)
    }
  }

  return (
    <>
      <div className='result'>
        <Input 
          ref={resultRef}
          className="shorted-link"
          type="url"
          name="shorted-link"
          id="shorted-link" 
          disabled
        />
        <Button onClick={handleClipboard} className='shorted-link'>
          Copiar
        </Button>
        
      </div>
      {copied ? <p className='copied'>Copiado!</p>: null}
    </>
  )
}

export default Result;