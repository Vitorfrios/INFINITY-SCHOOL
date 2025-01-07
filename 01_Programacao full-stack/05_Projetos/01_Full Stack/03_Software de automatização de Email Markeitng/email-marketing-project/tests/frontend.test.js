// frontend/src/__tests__/frontend.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; // Importa o componente principal

describe('Testes de Componente Frontend', () => {

  // Testa se o componente App é renderizado corretamente
  it('Deve renderizar o título "Sistema de Email Marketing"', () => {
    render(<App />);
    const titleElement = screen.getByText(/Sistema de Email Marketing/i);
    expect(titleElement).toBeInTheDocument(); // Verifica se o título aparece na tela
  });

  // Testa se o botão de envio de email está presente
  it('Deve exibir o botão de envio de email', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /Enviar Email/i });
    expect(buttonElement).toBeInTheDocument(); // Verifica se o botão existe na tela
  });

  // Testa se ao clicar no botão o envio é realizado
  it('Deve disparar a função de envio de email ao clicar no botão', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /Enviar Email/i });
    
    fireEvent.click(buttonElement); // Simula o clique no botão
    // Aqui você pode verificar se alguma função foi chamada, ou se algum estado foi alterado
    // Por exemplo, usando mocks para funções do React (se você implementar uma lógica real)
  });

});
