import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Bamboo Cutlery Set",
    price: 1299,
    description: "Travel-ready set of knife, fork, spoon, and chopsticks. Made from sustainably harvested bamboo with natural antibacterial properties. Includes organic cotton carry pouch.",
    images: [
      "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?auto=format&fit=crop&q=80"
    ],
    category: "Sustainable",
    subCategory: "Kitchen",
    rating: 4.8,
    reviews: 156,
    stock: 45,
    specifications: [
      { label: "Material", value: "Sustainably harvested bamboo" },
      { label: "Items Included", value: "Knife, fork, spoon, chopsticks" },
      { label: "Care", value: "Hand wash recommended" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-15"
  },
  {
    id: 2,
    name: "Solar-Powered Power Bank",
    price: 2499,
    description: "10000mAh power bank with dual charging capabilities: solar and USB. Made from recycled plastics with weather-resistant design. Perfect for outdoor adventures.",
    images: [
      "https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?auto=format&fit=crop&q=80"
    ],
    category: "Sustainable",
    subCategory: "Electronics",
    rating: 4.6,
    reviews: 89,
    stock: 30,
    specifications: [
      { label: "Capacity", value: "10000mAh" },
      { label: "Charging Methods", value: "Solar, USB" },
      { label: "Warranty", value: "2 years" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-14"
  },
  {
    id: 3,
    name: "Reusable Beeswax Food Wraps",
    price: 899,
    description: "Natural alternative to plastic wrap. Made with organic cotton, local beeswax, and jojoba oil. Washable and reusable for up to one year.",
    images: [
      "https://images.unsplash.com/photo-1590005354167-6da97870c757?auto=format&fit=crop&q=80"
    ],
    category: "Sustainable",
    subCategory: "Kitchen",
    rating: 4.7,
    reviews: 234,
    stock: 65,
    specifications: [
      { label: "Set Includes", value: "Small, Medium, Large wraps" },
      { label: "Materials", value: "Organic cotton, beeswax, jojoba oil" },
      { label: "Lifespan", value: "Up to 1 year" }
    ],
    sustainable: true,
    vegan: false,
    createdAt: "2024-03-13"
  },
  {
    id: 4,
    name: "Cork Yoga Mat",
    price: 3499,
    description: "100% natural cork surface with natural rubber base from FSC-certified sources. Antimicrobial and self-cleaning properties. Improves grip with moisture.",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80"
    ],
    category: "Sustainable",
    subCategory: "Fitness",
    rating: 4.9,
    reviews: 178,
    stock: 25,
    specifications: [
      { label: "Material", value: "Cork surface, Natural rubber base" },
      { label: "Size", value: "72\" x 24\"" },
      { label: "Thickness", value: "4mm" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-12"
  },
  {
    id: 5,
    name: "Recycled Ocean Plastic Backpack",
    price: 4999,
    description: "Made from recovered ocean plastics with water-resistant finish. Laptop compartment fits up to 15\" devices. Lifetime repair guarantee.",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80"
    ],
    category: "Sustainable",
    subCategory: "Bags",
    rating: 4.8,
    reviews: 145,
    stock: 20,
    specifications: [
      { label: "Material", value: "Recycled ocean plastic" },
      { label: "Capacity", value: "25L" },
      { label: "Laptop Fit", value: "Up to 15\"" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-11"
  },
  {
    id: 6,
    name: "Hemp Bed Sheets Set",
    price: 5999,
    description: "100% organic hemp fiber sheets that get softer with each wash. Naturally antimicrobial and uses 50% less water in production than cotton.",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80"
    ],
    category: "Sustainable",
    subCategory: "Home",
    rating: 4.7,
    reviews: 89,
    stock: 15,
    specifications: [
      { label: "Material", value: "100% organic hemp" },
      { label: "Set Includes", value: "1 flat sheet, 1 fitted sheet, 2 pillowcases" },
      { label: "Colors", value: "6 earth tones available" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-10"
  },
  {
    id: 7,
    name: "Plant-Based Leather Wallet",
    price: 1999,
    description: "Crafted from innovative cactus leather. Six card slots plus bill compartment. PETA-certified vegan and weather-resistant.",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80"
    ],
    category: "Vegan",
    subCategory: "Accessories",
    rating: 4.6,
    reviews: 67,
    stock: 40,
    specifications: [
      { label: "Material", value: "Cactus leather" },
      { label: "Card Slots", value: "6" },
      { label: "Colors", value: "Black, Brown, Tan" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-09"
  },
  {
    id: 8,
    name: "Vegan Protein Powder Blend",
    price: 1799,
    description: "25g protein per serving with a mix of pea, hemp, and pumpkin seed protein. No artificial sweeteners and complete amino acid profile.",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80"
    ],
    category: "Vegan",
    subCategory: "Nutrition",
    rating: 4.5,
    reviews: 234,
    stock: 50,
    specifications: [
      { label: "Protein", value: "25g per serving" },
      { label: "Flavors", value: "Chocolate, Vanilla, Unflavored" },
      { label: "Size", value: "1kg" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-08"
  },
  {
    id: 9,
    name: "Cruelty-Free Makeup Set",
    price: 2999,
    description: "Complete makeup set including mascara, lipstick, and foundation. Made with natural, plant-based ingredients and never tested on animals.",
    images: [
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80"
    ],
    category: "Vegan",
    subCategory: "Beauty",
    rating: 4.7,
    reviews: 156,
    stock: 35,
    specifications: [
      { label: "Contents", value: "Mascara, Lipstick, Foundation" },
      { label: "Ingredients", value: "Natural, Plant-based" },
      { label: "Packaging", value: "Recyclable" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-07"
  },
  {
    id: 10,
    name: "Mushroom Leather Sneakers",
    price: 4499,
    description: "Innovative sneakers with upper made from mycelium leather. Features recycled rubber soles and carbon-neutral production.",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80"
    ],
    category: "Vegan",
    subCategory: "Footwear",
    rating: 4.8,
    reviews: 89,
    stock: 25,
    specifications: [
      { label: "Upper Material", value: "Mycelium leather" },
      { label: "Sole", value: "Recycled rubber" },
      { label: "Style", value: "Unisex" }
    ],
    sustainable: true,
    vegan: true,
    createdAt: "2024-03-06"
  }
];