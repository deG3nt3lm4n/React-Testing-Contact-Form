import React from 'react'
import { screen, render  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

test('Basic Test' , () => {
  // 1. Arrange
  render(<ContactForm/>)
})

describe('Form Test', () => {


  // 2. Act
  const firstNameEl = screen.getByLabelText(/firstName/i)
  const lastNameEl = screen.getByLabelText(/lastName/i)
  const emailEl = screen.getByLabelText(/email/i)
  const messageEl = screen.getByLabelText(/message/i)
  const buttonEl = screen.getByRole('type', {type: /submit/i})

  userEvent.type(firstNameEl, 'ly')
  userEvent.type(lastNameEl, 'Ko')
  userEvent.type(emailEl, 'lyu@gm.com')
  userEvent.type(messageEl, 'My little babe')
  userEvent.click(buttonEl)


  // 3. Assert
  const newPerson = screen.findByText('ly')
  expect(newPerson).toBeInTheDocument()


})