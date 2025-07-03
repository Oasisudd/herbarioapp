
// ====================================================================================
//  ARCHIVO CENTRAL DE ESPECIES DEL HERBARIO
// ====================================================================================
// Para agregar una nueva especie, sigue estos pasos:
// 1. Copia uno de los bloques de código de una especie (desde `{` hasta `},`).
// 2. Pega el bloque copiado al final de la lista, justo antes del `];` final.
// 3. Modifica la información con los datos de tu nueva especie.
//
// ¡IMPORTANTE!
// - El campo `id` debe ser único.
// - Sube las imágenes a la plataforma y pega aquí los enlaces generados.
// ====================================================================================

export const speciesData = [
  {
    id: "triglochin-concinna-burtt-davy",
    scientific_name: "Triglochin concinna Burtt Davy",
    common_name: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    main_image: "https://oasisudd.github.io/herbario/Triglochin/Triglochin.JPG", // <-- Pega aquí el enlace de la imagen principal subida
    gallery_images: [
      "https://oasisudd.github.io/herbario/Triglochin/Triglochin2.png", // <-- Pega aquí el enlace de la primera imagen de galería
      "https://oasisudd.github.io/herbario/Triglochin/Triglochin3.png"  // <-- Pega aquí el enlace de la segunda imagen de galería
    ],
    family: "Juncaginaceae",
    habitat: "",
    altitude: "",
    status: "uncertain",
    habits: "Hierba perenne",
    origin: "Nativa",
    flowering_season: "",
    conservation_status: "",
    uses: ""
  },
  {
    id: "nototriche-compacta",
    scientific_name: "Nototriche compacta (A. Gray) A.W. Hill",
    common_name: "Mostaza",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    main_image: "https://oasisudd.github.io/herbario/Nototriche/Nototriche.png", // <-- Pega aquí el enlace de la imagen principal subida
    gallery_images: [
      "https://oasisudd.github.io/herbario/Nototriche/Nototriche2.png", // <-- Pega aquí el enlace de la primera imagen de galería
      "https://oasisudd.github.io/herbario/Nototriche/Nototriche3.png"  // <-- Pega aquí el enlace de la segunda imagen de galería
    ],
    family: "Malvaceae",
    habitat: "",
    altitude: "",
    status: "uncertain",
    habits: "Hierba perenne",
    origin: "Nativa",
    flowering_season: "",
    conservation_status: "",
    uses: ""
  },
  {
    id: "gamocarpha-compacta",
    scientific_name: "Gamocarpha compacta (Phil.) S. Denham & Pozner",
    common_name: "",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    main_image: "https://oasisudd.github.io/herbario/Gamocarpha/Gamocarpha.png", // <-- Pega aquí el enlace de la imagen principal subida
    gallery_images: [
      "https://oasisudd.github.io/herbario/Gamocarpha/Gamocarpha2.jpg", // <-- Pega aquí el enlace de la primera imagen de galería
      "https://oasisudd.github.io/herbario/Gamocarpha/Gamocarpha3.jpg"  // <-- Pega aquí el enlace de la segunda imagen de galería
    ],
    family: "Calyceraceae",
    habitat: "",
    altitude: "",
    status: "uncertain",
    habits: "Hierba bienal o perenne",
    origin: "Nativa",
    flowering_season: "",
    conservation_status: "",
    uses: ""
  }
];
