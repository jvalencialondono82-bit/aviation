/**
 * @file airports.mock.ts
 * @description Datos mock que se devuelven cuando la API externa falla.
 */

import { AirportResponse } from "@/interfaces/airportResponse";

/**
 * @constant MOCK_AIRPORTS
 * @description Lista de aeropuertos falsos generados para fallback.
 */
export const MOCK_AIRPORTS: AirportResponse = {
  pagination: {
    limit: 100,
    offset: 0,
    count: 50,
    total: 50,
  },
  data: [
    {
      id: "1",
      airport_id: "1001",
      airport_name: "Mock International Airport",
      iata_code: "MIA",
      icao_code: "KMIA",
      latitude: 25.7959,
      longitude: -80.287,
      geoname_id: "4164143",
      timezone: "America/New_York",
      gmt: "-5",
      phone_number: "+1 305-876-7000",
      country_name: "Estados Unidos",
      country_iso2: "US",
      city_iata_code: "MIA",
    },
    {
      id: "2",
      airport_id: "1002",
      airport_name: "Faker Regional Airport",
      iata_code: "FRA",
      icao_code: "KFRA",
      latitude: 50.0379,
      longitude: 8.5622,
      geoname_id: "2925533",
      timezone: "Europe/Berlin",
      gmt: "+1",
      phone_number: "+49 69 690 0",
      country_name: "Alemania",
      country_iso2: "DE",
      city_iata_code: "FRA",
    },
    {
      id: "3",
      airport_id: "1003",
      airport_name: "Example International",
      iata_code: "EXA",
      icao_code: "KEXA",
      latitude: 40.7128,
      longitude: -74.006,
      geoname_id: "5128581",
      timezone: "America/New_York",
      gmt: "-5",
      phone_number: "+1 212-555-0100",
      country_name: "Estados Unidos",
      country_iso2: "US",
      city_iata_code: "NYC",
    },

    // -----------------------------
    // GENERACIÓN DE 47 MOCKS MÁS
    // -----------------------------

    {
      id: "4",
      airport_id: "1004",
      airport_name: "Santiago Intl Airport",
      iata_code: "SCL",
      icao_code: "SCEL",
      latitude: -33.393,
      longitude: -70.7858,
      geoname_id: "3871336",
      timezone: "America/Santiago",
      gmt: "-4",
      phone_number: "+56 2 2690 1000",
      country_name: "Chile",
      country_iso2: "CL",
      city_iata_code: "SCL",
    },
    {
      id: "5",
      airport_id: "1005",
      airport_name: "Bogotá El Dorado",
      iata_code: "BOG",
      icao_code: "SKBO",
      latitude: 4.7016,
      longitude: -74.1469,
      geoname_id: "3688689",
      timezone: "America/Bogota",
      gmt: "-5",
      phone_number: "+57 1 425 1000",
      country_name: "Colombia",
      country_iso2: "CO",
      city_iata_code: "BOG",
    },
    {
      id: "6",
      airport_id: "1006",
      airport_name: "Buenos Aires Ezeiza",
      iata_code: "EZE",
      icao_code: "SAEZ",
      latitude: -34.8222,
      longitude: -58.5358,
      geoname_id: "3433955",
      timezone: "America/Argentina/Buenos_Aires",
      gmt: "-3",
      phone_number: "+54 11 5480 6111",
      country_name: "Argentina",
      country_iso2: "AR",
      city_iata_code: "BUE",
    },
    {
      id: "7",
      airport_id: "1007",
      airport_name: "Mexico City Intl",
      iata_code: "MEX",
      icao_code: "MMMX",
      latitude: 19.4361,
      longitude: -99.0719,
      geoname_id: "3530597",
      timezone: "America/Mexico_City",
      gmt: "-6",
      phone_number: "+52 55 2482 2400",
      country_name: "México",
      country_iso2: "MX",
      city_iata_code: "MEX",
    },
    {
      id: "8",
      airport_id: "1008",
      airport_name: "Toronto Pearson",
      iata_code: "YYZ",
      icao_code: "CYYZ",
      latitude: 43.6777,
      longitude: -79.6248,
      geoname_id: "6167865",
      timezone: "America/Toronto",
      gmt: "-5",
      phone_number: "+1 416-247-7678",
      country_name: "Canadá",
      country_iso2: "CA",
      city_iata_code: "YYZ",
    },

    // ---- CONTINÚA HASTA EL 50 ----

    ...Array.from({ length: 42 }).map((_, i) => {
      const id = 9 + i;
      return {
        id: String(id),
        airport_id: String(1000 + id),
        airport_name: `Mock Airport ${id}`,
        iata_code: `A${id}X`,
        icao_code: `K${id}XX`,
        latitude: 10 + i * 0.5,
        longitude: -20 - i * 0.4,
        geoname_id: String(1000000 + id),
        timezone: "UTC",
        gmt: "+0",
        phone_number: "+1 555-000-0000",
        country_name: "País Demo",
        country_iso2: "DM",
        city_iata_code: `C${id}`,
      };
    }),
  ],
};
