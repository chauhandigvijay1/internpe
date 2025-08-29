import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import A11yToggle from '../components/A11yToggle'

describe('A11yToggle', () => {
  it('renders with play button when paused', () => {
    render(<A11yToggle paused={true} onToggle={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('Resume Video')).toBeInTheDocument()
  })

  it('renders with pause button when not paused', () => {
    render(<A11yToggle paused={false} onToggle={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText('Pause Video')).toBeInTheDocument()
  })

  it('calls onToggle when clicked', () => {
    const handleToggle = vi.fn()
    render(<A11yToggle paused={false} onToggle={handleToggle} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleToggle).toHaveBeenCalledTimes(1)
  })

  it('updates aria-label based on paused state', () => {
    const { rerender } = render(<A11yToggle paused={false} onToggle={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Pause background video')

    rerender(<A11yToggle paused={true} onToggle={() => {}} />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Resume background video')
  })

  it('has accessible data-testid for testing', () => {
    render(<A11yToggle paused={false} onToggle={() => {}} />)
    expect(screen.getByTestId('a11y-toggle')).toBeInTheDocument()
  })
})
