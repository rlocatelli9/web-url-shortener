import { useState } from "react"
import './app.css'
import Result from "./components/Result"
import Form from "./components/Form"

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [shorted, setShorted] = useState<string>('')


  return (
    <div className="container">  
      <Form setError={setError} setLoading={setLoading} setShorted={setShorted}/>

      {shorted ? (
        <Result value={shorted} />
      ) : null}

      {loading ? (<p>Carregando...</p>) : null}
      {error ? (<p>Erro!</p>) : null}

    </div>
   )
}

export default App
