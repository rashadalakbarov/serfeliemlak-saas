import featured from "@/public/images/icons/featured.svg"
import docs from "@/public/images/icons/docs.svg"
import mortgage from "@/public/images/icons/mortgage.svg"
import vipped from "@/public/images/icons/vipped.svg"

import property from "@/public/images/properties/p1.jpg";

export const AppConfig = {
  company_name: "Arsanus",
  logo: "",
  primary_color: "#08606a",
  second_color: "ff9700",
  phone: "+994558215673",
  email: "info@arsanus.com",
  address: "Haydar Aliev ave, Baku, Azerbaijan",
  about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
  startYear: 2025,
  social: {
    instagram: "https://instagram.com/arsanus",
    facebook: "https://facebook.com/arsanus",
    twitter: "https://x.comarsanusp",
  },
};

export const sampleCards = [
  {
    id: "c1",
    image: property,
    price: "125000",
    location: "Bakı",
    rooms: 3,
    area: 120,
    date: "2024-09-20",
    // type: "vip",
  },
  {
    id: "c2",
    image: property,
    price: "85000",
    location: "Gəncə",
    rooms: 2,
    area: 85,
    date: "2024-07-05",
    // type: "premium",
  },
  {
    id: "c3",
    image: property,
    price: "45000",
    location: "Sumqayıt",
    rooms: 1,
    area: 45,
    date: "2024-01-12",
    // type: "normal",
  },
  {
    id: "c4",
    image: property,
    price: "45000",
    location: "Sumqayıt",
    rooms: 1,
    area: 45,
    date: "2024-01-12",
    // type: "normal",
  },
  {
    id: "c5",
    image: property,
    price: "45000",
    location: "Sumqayıt",
    rooms: 1,
    area: 45,
    date: "2024-01-12",
    // type: "normal",
  },
  {
    id: "c6",
    image: property,
    price: "45000",
    location: "Sumqayıt",
    rooms: 1,
    area: 45,
    date: "2024-01-12",
    // type: "normal",
  },
];

export const assets = {
  featured,
  docs,
  mortgage,
  vipped
};