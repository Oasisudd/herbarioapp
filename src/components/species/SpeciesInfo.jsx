import React from "react";
import { MapPin, Mountain, Leaf, Info, Globe, Flower } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SpeciesInfo({ species }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Main Information */}
      <Card className="bg-white/60 backdrop-blur-sm border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-oasis-azul">
            <Info className="w-5 h-5 text-oasis-turquesa" />
            Información General
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {species.family && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-1">Familia</h4>
              <Badge variant="outline" className="text-oasis-turquesa border-oasis-turquesa">
                <Leaf className="w-3 h-3 mr-1" />
                {species.family}
              </Badge>
            </div>
          )}
          
          {species.description && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-2">Descripción</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {species.description}
              </p>
            </div>
          )}

          {species.habits && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-2">Hábitos de Crecimiento</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {species.habits}
              </p>
            </div>
          )}

          {species.origin && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-1">Origen</h4>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-oasis-ocre" />
                <span className="text-sm text-gray-600">{species.origin}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Habitat Information */}
      <Card className="bg-white/60 backdrop-blur-sm border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg text-oasis-azul">
            <MapPin className="w-5 h-5 text-oasis-turquesa" />
            Hábitat y Distribución
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {species.altitude && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-1">Altitud</h4>
              <div className="flex items-center gap-2">
                <Mountain className="w-4 h-4 text-oasis-ocre" />
                <span className="text-sm text-gray-600">{species.altitude}</span>
              </div>
            </div>
          )}
          
          {species.habitat && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-2">Hábitat</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {species.habitat}
              </p>
            </div>
          )}

          {species.flowering_season && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-1">Época de Floración</h4>
              <div className="flex items-center gap-2">
                <Flower className="w-4 h-4 text-oasis-rosa" />
                <span className="text-sm text-gray-600">{species.flowering_season}</span>
              </div>
            </div>
          )}

          {species.conservation_status && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-2">Estado de Conservación</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {species.conservation_status}
              </p>
            </div>
          )}

          {species.uses && (
            <div>
              <h4 className="text-sm font-medium text-oasis-azul mb-2">Usos Tradicionales</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {species.uses}
              </p>
            </div>
          )}

          {!species.habitat && !species.altitude && !species.flowering_season && (
            <p className="text-sm text-gray-500 italic">
              Información de hábitat no disponible
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}