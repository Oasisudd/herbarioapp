
import React, { useState, useEffect } from "react";
import { speciesData } from "../components/data/speciesData";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SpeciesCard from "../components/catalog/SpeciesCard";
import FilterPanel from "../components/catalog/FilterPanel";

export default function Catalog() {
  const [filteredSpecies, setFilteredSpecies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFamily, setSelectedFamily] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    filterSpecies();
  }, [searchQuery, selectedFamily]);

  const filterSpecies = () => {
    let filtered = speciesData;

    if (searchQuery) {
      filtered = filtered.filter(
        (plant) =>
          plant.scientific_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (plant.common_name && plant.common_name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedFamily !== "all") {
      filtered = filtered.filter((plant) => plant.family === selectedFamily);
    }

    setFilteredSpecies(filtered);
  };
  
  // Cargar filtros y especies al inicio
  useEffect(() => {
    filterSpecies();
  }, []);

  const families = [...new Set(speciesData.map(plant => plant.family).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="px-4 md:px-8 py-4 text-center">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/047c2d9a8__LOGODESCRIPTORNEGATIVO03.png"
              alt="OASIS Logo"
              className="h-10 w-full object-contain mx-auto"
              style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(8%) saturate(1179%) hue-rotate(183deg) brightness(94%) contrast(91%)" }}
            />
             <h1 className="text-2xl font-light text-oasis-azul mt-2">
              Herbario <span className="font-medium">Digital</span>
            </h1>
        </div>
        <div className="px-4 md:px-8 pb-4">
          {/* Search and Filters */}
          <div className="mt-4 space-y-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Buscar especies por nombre científico o común..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/50 border-gray-200 focus:bg-white focus:border-oasis-turquesa"
              />
            </div>

            <FilterPanel
              families={families}
              selectedFamily={selectedFamily}
              setSelectedFamily={setSelectedFamily}
              showFilters={showFilters}
            />
             <div className="text-center md:hidden">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2 border-oasis-turquesa text-oasis-turquesa hover:bg-oasis-turquesa hover:text-white"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Species Grid */}
      <main className="px-4 md:px-8 py-8">
        {filteredSpecies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSpecies.map((plant) => (
              <SpeciesCard key={plant.id} species={plant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-oasis-azul mb-2">No se encontraron especies</h3>
            <p className="text-gray-500">
              Intenta ajustar los filtros o términos de búsqueda
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
