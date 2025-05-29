import { render, screen, fireEvent } from '@testing-library/react'
import ListaTarefas from '../components/ListaTarefas.jsx'
import React from 'react'; 

describe('Lista de Tarefas', () => {

    test('renderiza input e botão corretamente', () => {
        render(<ListaTarefas />)

        const input = screen.getByPlaceholderText('Nova tarefa')
        expect(input).toBeInTheDocument()

        const addButton = screen.getByText('Adicionar')
        expect(addButton).toBeInTheDocument()
    })

    test('adiciona tarefa à lista', () => {
        render(<ListaTarefas />);

        fireEvent.change(screen.getByPlaceholderText('Nova tarefa'), {
            target: { value: 'Estudar React' }
        });
        fireEvent.click(screen.getByText('Adicionar'));

        expect(screen.getByText('Estudar React')).toBeInTheDocument();
    })
})