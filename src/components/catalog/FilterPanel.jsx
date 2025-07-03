import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FilterPanel({ 
  families, 
  selectedFamily, 
  setSelectedFamily, 
  showFilters 
}) {
  return (
    <div className={`space-y-3 ${showFilters ? 'block' : 'hidden md:block'}`}>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedFamily === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedFamily("all")}
          className={selectedFamily === "all" ? "text-white" : "border-oasis-turquesa text-oasis-turquesa hover:bg-oasis-turquesa hover:text-white"}
          style={selectedFamily === "all" ? { backgroundColor: '#00a99d', borderColor: '#00a99d' } : {}}
        >
          Todas las familias
        </Button>
        
        {families.map((family) => (
          <Button
            key={family}
            variant={selectedFamily === family ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFamily(family)}
            className={selectedFamily === family ? "text-white" : "border-oasis-turquesa text-oasis-turquesa hover:bg-oasis-turquesa hover:text-white"}
            style={selectedFamily === family ? { backgroundColor: '#00a99d', borderColor: '#00a99d' } : {}}
          >
            {family}
          </Button>
        ))}
      </div>
    </div>
  );
}