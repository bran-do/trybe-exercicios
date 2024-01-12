import ValidEmail from "./ValidEmail";
import { render, screen } from '@testing-library/react'

test('O email é validado pelo componente ValidEmail.', () => {
  // Renderização
  const EMAIL_USER = 'felipe@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);

  // Seletor
  const isValid = screen.getByText(/Email Válido/i);

  // Aferência
  expect(isValid).toBeInTheDocument();
})

test('O email é invalidado pelo componente ValidEmail.', () => {
  const EMAIL_USER = 'felipe';
  render(<ValidEmail email={ EMAIL_USER } />);

  const isInvalid = screen.getByText(/Email Inválido/i);

  expect(isInvalid).toBeInTheDocument();
})