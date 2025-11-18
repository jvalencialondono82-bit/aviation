import { describe, it, beforeEach, expect, vi } from 'vitest';
import axios from 'axios';
import { useAirportStore } from '@/store/useAirportStore';

vi.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const resetStore = () => {
  useAirportStore.setState({
    airports: [],
    loading: false,
    error: '',
  } as any);
};

describe('useAirportStore', () => {
  beforeEach(() => resetStore());

  it('fetchAirports → carga correctamente los datos', async () => {
    mockedAxios.get.mockResolvedValue({
      data: { data: [{ id: 1, airport_name: 'Bogotá' }] },
    });

    await useAirportStore.getState().fetchAirports?.();

    const state = useAirportStore.getState();
    expect(state.airports).toHaveLength(1);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('');
  });

  it('fetchAirports → maneja errores correctamente', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network error'));

    await useAirportStore.getState().fetchAirports?.();

    const state = useAirportStore.getState();
    expect(state.error).toBe('No se pudo obtener la información de los aeropuertos.');
    expect(state.loading).toBe(false);
    expect(state.airports).toHaveLength(0);
  });

  it('fetchAirports → activa loading', async () => {
    mockedAxios.get.mockResolvedValue({ data: { data: [] } });

    const promise = useAirportStore.getState().fetchAirports?.();

    expect(useAirportStore.getState().loading).toBe(true);

    await promise;

    expect(useAirportStore.getState().loading).toBe(false);
  });
});
