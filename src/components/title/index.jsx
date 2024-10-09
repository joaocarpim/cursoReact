import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'

function Title({ name, p }) {
  
  var cargo = "Developer";

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>{name} é um {cargo}</h1>

      {p ? (
        <p>Lorem ipsum dolor, sit amet consectetur 
          adipisicing elit. Voluptatem recusandae, 
          harum neque maxime nulla a commodi quam 
          quasi maiores ea, nihil sit incidunt 
          exercitationem, modi odio. Veniam maxime 
          deserunt eos.

        </p>
        ) : (
            <p>não tem</p>
        )
      } 
    </>
  )
}

export default Title
