export interface AirportResponse {
  pagination: paginationType;
  data: airportType[];
}

export type paginationType = {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export type airportType = {
  id: string;
  airport_id: string;
  airport_name: string;
  iata_code: string;
  icao_code: string;
  latitude: number;
  longitude: number;
  geoname_id: string;
  timezone: string;
  gmt: string;
  phone_number: string;
  country_name: string;
  country_iso2: string;
  city_iata_code: string;
}