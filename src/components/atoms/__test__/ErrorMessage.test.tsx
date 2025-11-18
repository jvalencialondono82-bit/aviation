import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ErrorMessage from '@/components/atoms/ErrorMessage';

describe('ErrorMessage', () => {
  it('muestra el mensaje de error', () => {
    render(<ErrorMessage message="Error fatal" />);
    expect(screen.getByText('Error fatal')).toBeTruthy();
  });
});
