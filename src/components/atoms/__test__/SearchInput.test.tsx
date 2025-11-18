/**
 * @file SearchInput.test.tsx
 * @description Pruebas del input de búsqueda usando Vitest.
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  it('renderiza y ejecuta onChange', () => {
    const handleChange = vi.fn();

    render(
      <SearchInput value="" onChange={handleChange} placeholder="Buscar..." />
    );

    const input = screen.getByPlaceholderText('Buscar...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'bog' } });

    expect(handleChange).toHaveBeenCalled();
  });
});
