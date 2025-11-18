import { AirportResponse } from "@/interfaces/airportResponse";
import axios from "axios";
import { NextResponse } from "next/server";
import { MOCK_AIRPORTS } from "@/mocks/airports.mock";

/**
 * @route GET /api/airports
 * @description Obtiene aeropuertos desde AviationStack. Si falla, devuelve datos mock.
 */
export async function GET() {
  try {
    const url = "https://api.aviationstack.com/v1/airports";

    const response = await axios.get(url, {
      params: {
        access_key: process.env.ASTACK_KEY,
        limit: 100,
      },
    });

    const data: AirportResponse = response.data;

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("❌ Error en AviationStack:", error.message);

    // Retornar MOCKS
    return NextResponse.json(
      {
        success: true,
        mock: true, // Para debug si quieres
        ...MOCK_AIRPORTS,
      },
      { status: 200 },
    );
  }
}
