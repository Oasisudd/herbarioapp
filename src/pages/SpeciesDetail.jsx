
import React, { useState, useEffect } from "react";
import { speciesData } from "../components/data/speciesData"; // Corrected path
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, MapPin, Mountain, Leaf, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ImageGallery from "../components/species/ImageGallery";
import SpeciesInfo from "../components/species/SpeciesInfo";

export default function SpeciesDetail() {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const urlParams = new URLSearchParams(window.location.search);
    const speciesId = urlParams.get('id');
    
    if (speciesId) {
      const foundSpecies = speciesData.find(s => s.id === speciesId);
      setSpecies(foundSpecies);
    } else {
      console.error("No species ID found in URL");
    }
  }, []);


  if (!species) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderBottomColor: '#00a99d' }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="px-4 md:px-8 py-3">
           <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/047c2d9a8__LOGODESCRIPTORNEGATIVO03.png"
              alt="OASIS Logo"
              className="h-8 w-full object-contain"
              style={{ filter: "brightness(0) saturate(100%) invert(25%) sepia(8%) saturate(1179%) hue-rotate(183deg) brightness(94%) contrast(91%)" }}
            />
        </div>
      </header>

      {/* Content */}
      <main className="px-4 md:px-8 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
           <div className="flex items-center gap-4 mb-4">
             <Link
              to={createPageUrl("Catalog")}
              className="p-2 hover:bg-gray-100 rounded-full smooth-transition"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-xl md:text-2xl font-light text-oasis-azul italic">
                  {species.scientific_name}
                </h1>
                {species.status === 'uncertain' && (
                  <Badge variant="outline" className="text-oasis-ocre border-oasis-ocre bg-yellow-50">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Incierto
                  </Badge>
                )}
              </div>
              {species.common_name && (
                <p className="text-sm text-gray-500 mt-1">{species.common_name}</p>
              )}
            </div>
           </div>
          {/* Main Image and Gallery */}
          <ImageGallery
            mainImage={species.main_image}
            galleryImages={species.gallery_images || []}
            scientificName={species.scientific_name}
          />

          {/* Species Information */}
          <SpeciesInfo species={species} />

          {/* Back Button */}
          <div className="flex justify-center pt-8">
            <Link to={createPageUrl("Catalog")}>
              <Button
                variant="outline"
                className="px-8 py-3 text-lg border-oasis-turquesa text-oasis-turquesa hover:bg-oasis-turquesa hover:text-white"
              >
                ATRÁS
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
