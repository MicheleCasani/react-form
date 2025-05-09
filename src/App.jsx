import { useState } from 'react'
import FormVideogames from './FormVideogames'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <FormVideogames />
    </>
  )
}

export default App
