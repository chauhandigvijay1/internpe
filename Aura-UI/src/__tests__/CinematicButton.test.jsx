import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CinematicButton from '../components/CinematicButton'

describe('CinematicButton', () => {
  it('renders children text', () => {
    render(<CinematicButton>Click Me</CinematicButton>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<CinematicButton onClick={handleClick}>Click</CinematicButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(<CinematicButton onClick={handleClick} disabled>Click</CinematicButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('has aria-disabled attribute when disabled', () => {
    render(<CinematicButton disabled>Click</CinematicButton>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
  })

  it('applies primary variant by default', () => {
    const { container } = render(<CinematicButton>Click</CinematicButton>)
    expect(container.firstChild).toHaveClass('bg-aura-accent')
  })

  it('applies secondary variant classes', () => {
    const { container } = render(<CinematicButton variant="secondary">Click</CinematicButton>)
    expect(container.firstChild).toHaveClass('glass')
  })

  it('applies ghost variant classes', () => {
    const { container } = render(<CinematicButton variant="ghost">Click</CinematicButton>)
    expect(container.firstChild).toHaveClass('bg-transparent')
  })

  it('is keyboard accessible', () => {
    const handleClick = vi.fn()
    render(<CinematicButton onClick={handleClick}>Click</CinematicButton>)
    const button = screen.getByRole('button')
    button.focus()
    fireEvent.keyDown(button, { key: 'Enter' })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})
