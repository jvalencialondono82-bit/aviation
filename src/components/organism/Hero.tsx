import { Button } from '@/atoms/Button';

export const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-[url('https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      <div className="relative text-center text-white px-6 max-w-3xl animate-fadeIn">
        <h2 className="text-6xl font-extrabold mb-6 drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)] tracking-wide">
          Bienvenido a <span className="text-blue-400">AeroTrack</span>
        </h2>
        <p className="text-2xl mb-10 opacity-90 leading-relaxed">
          La plataforma más completa para monitorear vuelos en tiempo real usando AviationStack API.
        </p>
        <a href="/airport" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all cursor-pointer">Aeropuertos</a>
      </div>
    </section>
  );
};
