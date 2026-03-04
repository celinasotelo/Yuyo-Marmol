import { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "granito-rosa-de-salto",
    name: "Granito Rosa de Salto",
    description:
      "Granito natural de tonalidad rosada con vetas marrones y rojizas, ideal para quienes buscan calidez y resistencia en un mismo material. Su excelente dureza y baja absorción lo convierten en una opción perfecta para mesadas de cocina, baños y revestimientos tanto interiores como exteriores.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Mesadas de baño", "Revestimientos"],
    colors: ["Marrones/Rojos"],
    images: ["/images/rosadesalto0.png", "/images/rosadesalto2.png"],
    hardness: "Alta resistencia al rayado y al calor",
    format: "Placas y cortes a medida",
    thickness: "2 cm y 3 cm",
    featured: true,
  },
  {
    id: "granito-san-felipe",
    name: "Granito San Felipe",
    description:
      "Granito natural de tonalidad gris uniforme, muy elegido para proyectos modernos y minimalistas. Su durabilidad y fácil mantenimiento lo hacen ideal para mesadas de cocina y revestimientos verticales de alto tránsito.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Revestimientos"],
    colors: ["Grises"],
    images: ["/images/sanfelipe0.png"],
    hardness: "Alta resistencia estructural",
    format: "Placas estándar y personalizadas",
    thickness: "2 cm y 3 cm",
    featured: true,
  },
  {
    id: "granito-gris-mara",
    name: "Granito Gris Mara",
    description:
      "Granito gris clásico de textura homogénea y gran durabilidad. Muy utilizado en cocinas, pisos y espacios comerciales por su resistencia al desgaste y su estética sobria y elegante.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Pisos"],
    colors: ["Grises"],
    images: ["/images/grismara0.png"],
    hardness: "Muy alta resistencia al impacto",
    format: "Placas grandes y cortes especiales",
    thickness: "2 cm y 3 cm",
    featured: true,
  },
  {
    id: "granito-negro-brasil",
    name: "Granito Negro Brasil",
    description:
      "Granito negro intenso con acabado pulido brillante que aporta elegancia y sofisticación. Ideal para mesadas de cocina y baño de estilo moderno o industrial, combinando diseño con máxima resistencia.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Mesadas de baño"],
    colors: ["Negros"],
    images: ["/images/negrobrasil.png"],
    hardness: "Alta resistencia al calor y rayaduras",
    format: "Placas pulidas y satinadas",
    thickness: "2 cm y 3 cm",
  },
  {
    id: "granito-coffee-brown",
    name: "Granito Coffee Brown",
    description:
      "Granito marrón oscuro con vetas negras, ideal para ambientes cálidos y elegantes. Su estructura compacta lo hace apto para cocinas, pisos y espacios de alto tránsito.",
    priceFrom: 0,
    material: "granito",
    application: ["Mesadas de cocina", "Pisos"],
    colors: ["Marrones/Rojos"],
    images: ["/images/coffeebrown.png"],
    hardness: "Gran resistencia mecánica",
    format: "Placas naturales y cortes especiales",
    thickness: "2 cm y 3 cm",
  },
  {
    id: "marmol-blanco-carrara",
    name: "Mármol Blanco Carrara",
    description:
      "Mármol clásico de origen italiano con fondo blanco y delicadas vetas grises. Muy apreciado en diseño de interiores por su elegancia atemporal. Ideal para revestimientos y mesadas de baño de estilo sofisticado.",
    priceFrom: 0,
    material: "marmol",
    application: ["Revestimientos", "Mesadas de baño"],
    colors: ["Blanco", "Gris"],
    images: ["/images/blancocarrara.png"],
    hardness: "Resistencia media, material noble",
    format: "Placas pulidas",
    thickness: "2 cm",
  },
  {
    id: "marmol-traventino-romano",
    name: "Mármol Traventino Romano",
    description:
      "Mármol travertino de tonos beige cálidos con vetas naturales. Ideal para pisos y revestimientos que buscan un estilo clásico y elegante con textura distintiva.",
    priceFrom: 0,
    material: "marmol",
    application: ["Revestimientos", "Pisos"],
    colors: ["Beige"],
    images: [],
    hardness: "Resistencia media",
    format: "Placas y baldosas",
    thickness: "2 cm",
  },
  {
    id: "marmol-verde-del-bosque",
    name: "Mármol Verde del Bosque",
    description:
      "Mármol verde intenso con vetas marcadas que aportan personalidad y distinción. Recomendado para revestimientos decorativos y espacios exclusivos.",
    priceFrom: 0,
    material: "marmol",
    application: ["Revestimientos"],
    colors: ["Verde"],
    images: [],
    hardness: "Resistencia media",
    format: "Placas decorativas",
    thickness: "2 cm",
  },
  {
    id: "silestone-blanco",
    name: "Silestone Blanco",
    description:
      "Superficie de cuarzo compactado de alta tecnología, extremadamente resistente a manchas y rayaduras. Ideal para mesadas modernas de cocina y baño, con bajo mantenimiento y alta durabilidad.",
    priceFrom: 0,
    material: "silestone",
    application: ["Mesadas de cocina", "Mesadas de baño"],
    colors: ["Blanco"],
    images: [],
    hardness: "Muy alta resistencia a manchas",
    format: "Tablas industriales",
    thickness: "1.2 cm, 2 cm y 3 cm",
  },
  {
    id: "silestone-rojo",
    name: "Silestone Rojo",
    description:
      "Superficie de cuarzo de color rojo vibrante, perfecta para proyectos modernos y audaces. Combina diseño impactante con resistencia superior al uso diario.",
    priceFrom: 0,
    material: "silestone",
    application: ["Mesadas de cocina"],
    colors: ["Rojo"],
    images: [],
    hardness: "Alta resistencia al desgaste",
    format: "Tablas industriales",
    thickness: "2 cm",
  },
  {
    id: "silestone-calacatta-classic",
    name: "Silestone Calacatta Classic",
    description:
      "Superficie de cuarzo inspirada en el mármol Calacatta, con fondo blanco y vetas grises elegantes. Ofrece estética premium con mayor resistencia y menor mantenimiento que el mármol natural.",
    priceFrom: 0,
    material: "silestone",
    application: ["Mesadas de cocina", "Mesadas de baño"],
    colors: ["Blanco", "Gris"],
    images: [],
    hardness: "Alta resistencia a impactos y manchas",
    format: "Tablas de gran formato",
    thickness: "2 cm y 3 cm",
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