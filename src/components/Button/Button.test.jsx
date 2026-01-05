import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with primary color', () => {
    render(<Button color="primary">Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('gov-button--primary');
  });

  it('renders with secondary color', () => {
    render(<Button color="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('gov-button--secondary');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="xs">XS</Button>);
    expect(screen.getByRole('button')).toHaveClass('gov-button--xs');
    
    rerender(<Button size="xl">XL</Button>);
    expect(screen.getByRole('button')).toHaveClass('gov-button--xl');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('gov-button--disabled');
  });

  it('renders with left icon', () => {
    render(<Button leftIcon={<span data-testid="left-icon">←</span>}>With Icon</Button>);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Button rightIcon={<span data-testid="right-icon">→</span>}>With Icon</Button>);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('renders different button types', () => {
    const { rerender } = render(<Button type="solid">Solid</Button>);
    expect(screen.getByRole('button')).toHaveClass('gov-button--solid');
    
    rerender(<Button type="outlined">Outlined</Button>);
    expect(screen.getByRole('button')).toHaveClass('gov-button--outlined');
    
    rerender(<Button type="link">Link</Button>);
    expect(screen.getByRole('button')).toHaveClass('gov-button--link');
  });

  it('does not fire click when disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});

