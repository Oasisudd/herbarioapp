import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#343b4d' }}>
      <div className="w-full max-w-2xl">
        <main className="text-center space-y-3">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ce1836582__LOGODESCRIPTORNEGATIVO03.png"
            alt="OASIS Logo"
            className="h-auto w-full max-w-sm mx-auto object-contain"
          />

          <div>
            <h1 className="text-3xl md:text-4xl font-light text-white tracking-wider">
              HERBARIO DIGITAL
            </h1>
            <p className="text-base text-gray-300 font-light mt-1">
              Un viaje interactivo por la flora de los Salares Andinos.
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b1a0aafdf_Screenshot2025-06-30at170722.png"
              alt="Arenaria rivularis"
              className="w-full h-full object-cover"
            />
          </div>

          <Link
            to={createPageUrl("Catalog")}
            className="group inline-block px-8 py-3 text-white font-semibold rounded-md smooth-transition hover:shadow-xl hover:scale-105 active:scale-95 tracking-widest"
            style={{ backgroundColor: '#00a99d' }}
          >
            ENTRAR
          </Link>
        </main>
        
        <footer className="mt-6">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/22840be72_logosUniversidades.png"
            alt="Logos institucionales"
            className="w-full h-auto"
          />
        </footer>
      </div>
    </div>
  );
}