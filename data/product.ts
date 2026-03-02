import { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "granito-rosa-de-salto",
    name: "Granito Rosa de Salto",
    description: "Granito natural resistente y elegante para interiores y exteriores.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Mesadas de baño", "Revestimientos"],
    colors: ["Marrones/Rojos"],
    images: ["/images/rosadesalto0.png"],
    featured: true
  },
  {
    id: "granito-san-felipe",
    name: "Granito San Felipe",
    description: "Granito natural ideal para mesadas y revestimientos.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Revestimientos"],
    colors: ["Grises"],
    images: ["/images/sanfelipe0.png"],
    featured: true
  },
  {
    id: "granito-gris-mara",
    name: "Granito Gris Mara",
    description: "Granito gris clásico de gran durabilidad.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Pisos"],
    colors: ["Grises"],
    images: ["/images/grismara0.png"]
  },
  {
    id: "granito-negro-brasil",
    name: "Granito Negro Brasil",
    description: "Granito negro intenso ideal para diseños elegantes.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Mesadas de baño"],
    colors: ["Negros"],
    images: ["/images/negrobrasil.png"]
  },
  {
    id: "granito-coffee-brown",
    name: "Granito Coffee Brown",
    description: "Granito marrón oscuro de gran resistencia.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Pisos"],
    colors: ["Marrones/Rojos"],
    images: ["/images/coffeebrown.png"]
  },
  {
    id: "marmol-blanco-carrara",
    name: "Mármol Blanco Carrara",
    description: "Mármol italiano clásico con vetas grises.",
    priceFrom: 0,
    material: "marmol",
    application: ["Revestimientos", "Mesadas de baño"],
    colors: ["Blanco", "Gris"],
    images: []
  },
  {
    id: "marmol-traventino-romano",
    name: "Mármol Traventino Romano",
    description: "Mármol travertino de estilo clásico.",
    priceFrom: 0,
    material: "marmol",
    application: ["Revestimientos", "Pisos"],
    colors: ["Beige"],
    images: []
  },
  {
    id: "marmol-verde-del-bosque",
    name: "Mármol Verde del Bosque",
    description: "Mármol verde natural con vetas marcadas.",
    priceFrom: 0,
    material: "marmol",
    application: ["Revestimientos"],
    colors: ["Verde"],
    images: []
  },
  {
    id: "silestone-blanco",
    name: "Silestone Blanco",
    description: "Superficie de cuarzo resistente y moderna.",
    priceFrom: 0,
    material: "silestone",
    application: ["Mesadas de cocina", "Mesadas de baño"],
    colors: ["Blanco"],
    images: []
  },
  {
    id: "silestone-rojo",
    name: "Silestone Rojo",
    description: "Superficie roja vibrante para diseños modernos.",
    priceFrom: 0,
    material: "silestone",
    application: ["Mesadas de cocina"],
    colors: ["Rojo"],
    images: []
  },
  {
    id: "silestone-calacatta-classic",
    name: "Silestone Calacatta Classic",
    description: "Superficie con vetas estilo mármol calacatta.",
    priceFrom: 0,
    material: "silestone",
    application: ["Mesadas de cocina", "Mesadas de baño"],
    colors: ["Blanco", "Gris"],
    images: []
  },
]

/* 

Granitos naturales:
Rosa de salto
San Felipe 
Gris Mara 
Gris perla
Franco veteado 
Negro brasil 
Negro vía láctea 
Negro Leather 
Negro sultán 
Negro absoluto imperial
Negro marquino 
Blanco pitaya 
Coffee brown 
Azul labrador 


Mármoles:
Traventino brasil 
Blanco turco 
Blanco carrara
Grigio nuvola 
Traventino romano
Traventino new beige galala 
Marrón del bosque
Verde del bosque
Silestone:
Blanco 
Blanco norte 
Aluminio
Crema 
Rojo 
Calacatta classic 
*/