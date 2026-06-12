import { LangConfig } from './types';

const sharedMenuData = [
  { category: 'snacks' as const, name: 'Palomitas', icon: '🍿' },
  { category: 'snacks' as const, name: 'Chicharrones', icon: '🥓' },
  { category: 'snacks' as const, name: 'Elote entero', icon: '🌽' },
  { category: 'snacks' as const, name: 'Elote en vaso', icon: '🌽' },
  { category: 'snacks' as const, name: 'Nachos', icon: '🧀' },
  { category: 'snacks' as const, name: 'Hot Cheetos con queso', icon: '🔥' },
  { category: 'snacks' as const, name: 'Tostitos preparados', icon: '🌶️' },
  { category: 'desserts' as const, name: 'Raspas', icon: '🍧' },
  { category: 'drinks' as const, name: 'Rusas', icon: '🍹' },
  { category: 'desserts' as const, name: 'Mangonadas', icon: '🥭' },
  { category: 'desserts' as const, name: 'Paletas', icon: '🍭' },
  { category: 'desserts' as const, name: 'Nieves', icon: '🍨' },
  { category: 'desserts' as const, name: 'Bolis', icon: '🧊' },
  { category: 'drinks' as const, name: 'Agua regular', icon: '💧' },
  { category: 'drinks' as const, name: 'Coca-Cola', icon: '🥤' },
  { category: 'drinks' as const, name: 'Fanta', icon: '🥤' },
  { category: 'drinks' as const, name: 'Sprite', icon: '🥤' },
];

export const content: Record<string, LangConfig> = {
  es: {
    nav: {
      home: "Inicio",
      flowers: "Floristería",
      drinks: "Refresquería",
      gallery: "Galería",
      reviews: "Opiniones",
      contact: "Contacto",
    },
    hero: {
      title: "Flores hermosas y sabores que refrescan tus mejores momentos.",
      btnFlowers: "Ver Floristería",
      btnMenu: "Ver Menú",
    },
    flowers: {
      title: "Rosa Blanca Flower Shop",
      subtitle: "Creamos arreglos florales personalizados para cumpleaños, aniversarios, eventos especiales, funerales y cualquier ocasión importante.",
      services: [
        "Ramos personalizados",
        "Arreglos florales",
        "Flores para funerales",
        "Flores para celebraciones",
        "Decoración floral para eventos",
      ],
    },
    drinks: {
      title: "Aly Refresquería",
      subtitle: "Disfruta auténticos antojitos, bebidas y postres mexicanos preparados con ingredientes frescos.",
      menuLabels: {
        snacks: "Antojitos & Snacks",
        desserts: "Postres Fríos",
        drinks: "Bebidas",
      },
      menuData: sharedMenuData,
    },
    gallery: {
      title: "Nuestra Galería",
      filters: {
        all: "Todos",
        flowers: "Arreglos florales & Ramos",
        events: "Eventos",
        drinks: "Refresquería",
        snacks: "Postres & Snacks"
      }
    },
    reviews: {
      title: "Lo que dicen nuestros clientes",
      list: [
        {
          text: "Me encanta esta tienda, las chicas son muy amables. Conseguí exactamente lo que pedí. Sin duda volveré.",
          author: "Cliente Feliz"
        },
        {
          text: "Se esforzaron al máximo para crear un hermoso arreglo floral. Los recomiendo ampliamente.",
          author: "Cliente Satisfecho"
        }
      ]
    },
    contact: {
      title: "Visítanos o Contáctanos",
      addressLabel: "Dirección",
      phoneLabel: "Llámanos",
      socialLabel: "Síguenos",
      callBtn: "Llamar ahora",
      whatsappBtn: "WhatsApp"
    },
    footer: {
      thanks: "Gracias por elegir Rosa Blanca Flower Shop & Aly Refresquería.",
      rights: "© 2026 Rosa Blanca Flower Shop & Aly Refresquería. Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      home: "Home",
      flowers: "Flower Shop",
      drinks: "Refreshment Bar",
      gallery: "Gallery",
      reviews: "Reviews",
      contact: "Contact",
    },
    hero: {
      title: "Beautiful flowers and refreshing flavors for your special moments.",
      btnFlowers: "Flower Shop",
      btnMenu: "View Menu",
    },
    flowers: {
      title: "Rosa Blanca Flower Shop",
      subtitle: "We create custom floral arrangements for birthdays, anniversaries, special events, funerals and every meaningful occasion.",
      services: [
        "Custom bouquets",
        "Floral arrangements",
        "Funeral flowers",
        "Celebration flowers",
        "Event floral decoration",
      ],
    },
    drinks: {
      title: "Aly Refreshment Bar",
      subtitle: "Enjoy authentic Mexican snacks, desserts and refreshing drinks made with fresh ingredients.",
      menuLabels: {
        snacks: "Snacks",
        desserts: "Cold Desserts",
        drinks: "Drinks",
      },
      menuData: sharedMenuData,
    },
    gallery: {
      title: "Our Gallery",
      filters: {
        all: "All",
        flowers: "Arrangements & Bouquets",
        events: "Events",
        drinks: "Refreshments",
        snacks: "Desserts & Snacks"
      }
    },
    reviews: {
      title: "What Our Customers Say",
      list: [
        {
          text: "I love this shop, the staff is very kind. I got exactly what I asked for. I will definitely come back.",
          author: "Happy Customer"
        },
        {
          text: "They went above and beyond to create a beautiful floral arrangement. Highly recommended.",
          author: "Satisfied Customer"
        }
      ]
    },
    contact: {
      title: "Visit or Contact Us",
      addressLabel: "Address",
      phoneLabel: "Call Us",
      socialLabel: "Follow Us",
      callBtn: "Call Now",
      whatsappBtn: "WhatsApp"
    },
    footer: {
      thanks: "Thank you for choosing Rosa Blanca Flower Shop & Aly Refreshment Bar.",
      rights: "© 2026 Rosa Blanca Flower Shop & Aly Refreshment Bar. All rights reserved."
    }
  }
};
