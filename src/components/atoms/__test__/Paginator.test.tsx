/**
 * @file Paginator.test.tsx
 * @description Pruebas del componente de paginación usando Vitest.
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Paginator from '../Paginator';

describe('Paginator', () => {
  it('no renderiza si solo hay 1 página', () => {
    const { container } = render(
      <Paginator currentPage={1} totalPages={1} onPageChange={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('cambia a página siguiente', () => {
    const mockFn = vi.fn();
    render(<Paginator currentPage={1} totalPages={3} onPageChange={mockFn} />);
    fireEvent.click(screen.getByText('Siguiente'));
    expect(mockFn).toHaveBeenCalledWith(2);
  });

  it('cambia a página anterior', () => {
    const mockFn = vi.fn();
    render(<Paginator currentPage={2} totalPages={3} onPageChange={mockFn} />);
    fireEvent.click(screen.getByText('Anterior'));
    expect(mockFn).toHaveBeenCalledWith(1);
  });
});
