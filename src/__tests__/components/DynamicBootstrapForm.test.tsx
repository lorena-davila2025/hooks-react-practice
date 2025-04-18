import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import DynamicBootstrapForm from '../../components/DynamicBoostrapForm'
import 'whatwg-fetch' // fetch polyfill for the Jest tests

global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue({}),
})

describe('DynamicBootstrapForm (integration with useForm)', () => {
  const FIELDS = [
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'name', label: 'Name', type: 'text' },
  ]

  const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

  const buildUrl = () => BASE_URL

  it('renders form fields and handles inputs', () => {
    render(<DynamicBootstrapForm fields={FIELDS} buildUrl={buildUrl} />)

    const emailInput = screen.getByLabelText(/email/i)
    const nameInput = screen.getByLabelText(/name/i)

    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } })
    fireEvent.change(nameInput, { target: { value: 'Jane' } })

    expect(emailInput).toHaveValue('abc@gmail.com')
    expect(nameInput).toHaveValue('Jane')
  })

  it('submits the form', () => {
    render(<DynamicBootstrapForm fields={FIELDS} buildUrl={buildUrl} />)

    const emailInput = screen.getByLabelText(/email/i)
    const nameInput = screen.getByLabelText(/name/i)
    const submitButton = screen.getByRole('button', { name: /submit/i })
    const resetButton = screen.getByRole('button', { name: /reset/i })

    fireEvent.change(emailInput, { target: { value: '123' } })
    fireEvent.change(nameInput, { target: { value: '' } })

    expect(submitButton).toHaveClass('disabled')

    // Fill in the form
    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } })
    fireEvent.change(nameInput, { target: { value: 'Jane' } })

    // Submit form
    expect(submitButton).not.toHaveClass('disabled')

    fireEvent.click(submitButton)

    // Assert fetch was called with the correct parameters
    expect(fetch).toHaveBeenCalledWith(
      BASE_URL,
      expect.objectContaining({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'abc@gmail.com',
          name: 'Jane',
        }),
      })
    )

    expect(fetch).toHaveBeenCalledTimes(1)

    expect(emailInput).toHaveValue('')
    expect(nameInput).toHaveValue('')

    expect(emailInput).toHaveValue('')
    expect(nameInput).toHaveValue('')
  })

  it('resets the form', () => {
    render(<DynamicBootstrapForm fields={FIELDS} buildUrl={buildUrl} />)

    const emailInput = screen.getByLabelText(/email/i)
    const nameInput = screen.getByLabelText(/name/i)
    const resetButton = screen.getByRole('button', { name: /reset/i })

    expect(resetButton).toHaveClass('disabled')

    // Fill in the form
    fireEvent.change(emailInput, { target: { value: 'abc@gmail.com' } })
    fireEvent.change(nameInput, { target: { value: 'Jane' } })

    // Reset form
    expect(resetButton).not.toHaveClass('disabled')
    fireEvent.click(resetButton)

    expect(emailInput).toHaveValue('')
    expect(nameInput).toHaveValue('')
  })
})
