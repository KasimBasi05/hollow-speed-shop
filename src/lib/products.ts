export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "hw-001",
    name: "Inferno Drifter",
    price: 4.99,
    category: "Muscle",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "hw-002",
    name: "Night Striker",
    price: 5.49,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "hw-003",
    name: "Crimson Bolt",
    price: 3.99,
    category: "Race",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "hw-004",
    name: "Shadow Runner",
    price: 6.99,
    category: "Exotic",
    image: "https://images.unsplash.com/photo-1503376763036-066120622c74?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "hw-005",
    name: "Turbo Viper",
    price: 5.99,
    category: "Muscle",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "hw-006",
    name: "Redline Racer",
    price: 4.49,
    category: "Race",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "hw-007",
    name: "Phantom GT",
    price: 7.99,
    category: "Exotic",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "hw-008",
    name: "Street Hawk",
    price: 3.49,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1605559424843-9e4fb4d0f38c?w=600&auto=format&fit=crop&q=80",
  },
];
