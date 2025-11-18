import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DataNotFound from '@/components/atoms/DataNotFound';

describe('DataNotFound', () => {
  it('muestra el mensaje de no encontrado', () => {
    render(<DataNotFound />);
    expect(screen.getByText('No se encontró información')).toBeTruthy();
  });
});
