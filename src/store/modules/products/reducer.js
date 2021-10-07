import { GET_PRODUCTS } from "./actionTypes";

const initialState = [
  {
    name: "Guitarra Stratocaster Classic Vibe 50'S Escala Maple Squier By Fender - White Blonde",
    price: 6279.0,
    image: "https://i.imgur.com/yMb81h8.jpg",
  },
  {
    name: "Guitarra Classic Vintage White T-635 Escala Escura Tortoise Tagima - Olympic White",
    price: 2029.0,
    image: "https://i.imgur.com/k0E1OEO.jpg",
  },
  {
    name: "Guitarra Classic T-635 Escala Clara Tagima - Vermelho",
    price: 2029.0,
    image: "https://i.imgur.com/spy4d2X.jpg",
  },
  {
    name: "Guitarra Woodstock Series Tw-61 Tagima - Branco",
    price: 1890.0,
    image: "https://i.imgur.com/Q3xF4ol.jpg",
  },
  {
    name: "Guitarra Street ST 111 Waldman - Branco",
    price: 959.0,
    image: "https://i.imgur.com/mEV7OIi.jpg",
  },
  {
    name: "Guitarra Strato SST62+ Vintage White SX - Branco",
    price: 1739.0,
    image: "https://i.imgur.com/VlqW9v4.jpg",
  },
  {
    name: "Guitarra Stratocaster Classic Vibe 60's Escala em Laurel Squier By Fender - Vermelho",
    price: 6529.0,
    image: "https://i.imgur.com/s6mpkno.jpg",
  },
  {
    name: "Guitarra Stratocaster Affinity com Escala em Laurel Indiano Squier By Fender - Verde",
    price: 3709.0,
    image: "https://i.imgur.com/WqpLXz1.jpg",
  },
  {
    name: "Guitarra Infantil Marvel Gms-k1 Homem Aranha PHX",
    price: 849.0,
    image: "https://i.imgur.com/9FtEMPp.jpg",
  },
  {
    name: "GUITARRA GRG140 SB Ibanez",
    price: 3029.0,
    image: "https://i.imgur.com/KoajV5Z.jpg",
  },
  {
    name: "Guitarra Signature Scott Ian King V KVXT Jackson",
    price: 6490.0,
    image: "https://i.imgur.com/EWcTgEb.jpg",
  },
  {
    name: "Guitarra Woodstock Series TW-500 Escala Escura Escudo Mint Green Tagima - Branco",
    price: 1259.0,
    image: "https://i.imgur.com/cutowIS.jpg",
  },
];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;
    default:
      return state;
  }
};

export default productsReducer;
