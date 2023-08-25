import { useState } from 'react'
import './App.css'

interface FormData {
  nome: string;
  sobrenome: string;
}

function App() {

  const [fullName, setFullName] = useState<string>()
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    sobrenome: ''
  })

  function handleInputChange(e: any) {
    //valor do input
    const value = e.target.value
    //nome do input
    const name = e.target.name
    //manipulando o valor do input
    setFormData({ ...formData, [name]: value })
  }

  function handleFormSubmit(e: any) {
    e.preventDefault()
    setFullName(`${formData.nome} ${formData.sobrenome}`)
  }

  /*function handleName(e: any) {
    setFormData({...formData, nome: e.target.value})
  }

  function HandleLastName(e: any) {
    setFormData({...formData, sobrenome: e.target.value})
  }*/


  return (
    <div className='container'>
      <form onSubmit={handleFormSubmit}>
        <h1>Cadastro</h1>
        <div>
          <input
            type="text"
            name='nome'
            placeholder='Digite seu nome'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            name='sobrenome'
            placeholder='Digite seu sobrenome'
            onChange={handleInputChange}
          />
        </div>
        <button>Enviar</button>
      </form>
      <div>
        {fullName &&
          <p>
            Nome: {fullName}
          </p>
        }
      </div>
    </div>
  )
}

export default App
