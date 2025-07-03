import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SpeciesCard({ species }) {
  return (
    <Link
      to={createPageUrl(`SpeciesDetail?id=${species.id}`)}
      className="group block"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg smooth-transition border border-gray-100 hover:border-gray-200">
        {/* Image */}
        <div className="aspect-square relative overflow-hidden">
          <img
            src={species.main_image}
            alt={species.scientific_name}
            className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
          
          {species.status === 'uncertain' && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-white/90 text-oasis-ocre border-oasis-ocre">
                <AlertCircle className="w-3 h-3 mr-1" />
                ?
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-medium text-oasis-azul italic text-sm md:text-base leading-tight">
              {species.scientific_name}
            </h3>
            {species.common_name && (
              <p className="text-xs text-gray-500 mt-1">{species.common_name}</p>
            )}
          </div>

          {species.family && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs text-oasis-turquesa border-oasis-turquesa">
                {species.family}
              </Badge>
            </div>
          )}

          {species.description && (
            <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
              {species.description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}