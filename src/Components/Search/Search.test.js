import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, waitFor, fireEvent } from '@testing-library/react'
import Search from './Search.js'
jest.mock('../../API');

describe('Search Componey', () => {
  it('should render a search bar and button', () => {
    render(<Search />);

    const searchInput = screen.getByPlaceholderText('search')
    const submitButton = screen.getByRole('button', {name: 'Search'})

    expect(searchInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})