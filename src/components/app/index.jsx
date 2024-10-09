import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Title from '../title'
import Button from '../button'


import './styles.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("João")
  
  const handleInput = (nowText) => {
    setText(nowText.value);
    
  }
  return (
    <>
      <input 
        value={text} 
        onChange={(e) => handleInput(e.target)} 
        type="text"
      />

      <Title name={text} p={count > 4 & count > 7 == false} />     

        <div className="card">
        <Button count={count} setCount={setCount} />
        <p>
          Edite <code>src/App.jsx</code> e salve para testar o HMR        
        </p>
      </div>
    </>
  )
}

export default App
