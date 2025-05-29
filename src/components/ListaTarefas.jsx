import './style.css'
import React, { useState } from 'react'

export default function ListaTarefas(){
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('')

  function adicionarTarefa(){
    if (novaTarefa.trim() !== '') { // Verifica se a tarefa não está vazia
      setTarefas([...tarefas, novaTarefa])
      setNovaTarefa('')
    }
  }

  return(
    <div className="container">
      <h1>📝Lista de Tarefas</h1>
      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder='Nova tarefa'
      />
      <button className='botao' onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}