
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        :root {
          --oasis-turquesa: #00a99d;
          --oasis-ocre: #a98743;
          --oasis-azul: #343b4d;
          --oasis-rosa: #FF7BAC;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .oasis-gradient {
          background: linear-gradient(135deg, var(--oasis-turquesa) 0%, #00c4b7 100%);
        }
        
        .oasis-turquesa {
          background-color: var(--oasis-turquesa);
        }
        
        .oasis-ocre {
          background-color: var(--oasis-ocre);
        }
        
        .oasis-azul {
          background-color: var(--oasis-azul);
        }
        
        .text-oasis-turquesa {
          color: var(--oasis-turquesa);
        }
        
        .text-oasis-ocre {
          color: var(--oasis-ocre);
        }
        
        .text-oasis-azul {
          color: var(--oasis-azul);
        }
        
        .border-oasis-turquesa {
          border-color: var(--oasis-turquesa);
        }
        
        .smooth-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      
      {children}
    </div>
  );
}
