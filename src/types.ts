export type Language = 'es' | 'en';

export interface LangConfig {
  nav: {
    home: string;
    flowers: string;
    drinks: string;
    gallery: string;
    reviews: string;
    contact: string;
  };
  hero: {
    title: string;
    btnFlowers: string;
    btnMenu: string;
  };
  flowers: {
    title: string;
    subtitle: string;
    services: string[];
  };
  drinks: {
    title: string;
    subtitle: string;
    menuLabels: {
        snacks: string;
        desserts: string;
        drinks: string;
    };
    menuData: {
        category: 'snacks' | 'desserts' | 'drinks';
        name: string;
        icon: string;
    }[];
  };
  gallery: {
    title: string;
    filters: {
        all: string;
        flowers: string;
        events: string;
        drinks: string;
        snacks: string;
    };
  };
  reviews: {
    title: string;
    list: {
      text: string;
      author: string;
    }[];
  };
  contact: {
    title: string;
    addressLabel: string;
    phoneLabel: string;
    socialLabel: string;
    callBtn: string;
    whatsappBtn: string;
  };
  footer: {
    thanks: string;
    rights: string;
  };
}
