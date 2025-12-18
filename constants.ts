import { Product } from './types';

export const CATEGORIES = [
  { id: 'lighting', name: 'Lighting', image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=400' },
  { id: 'fans', name: 'Fans & Cooling', image: 'https://images.unsplash.com/photo-1695760177249-85c742906940?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'wires', name: 'Wires & Cables', image: 'https://images.unsplash.com/photo-1625276254563-f0fbbf66a5e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'switches', name: 'Switches & Sockets', image: 'https://images.unsplash.com/photo-1705163630188-bd3f0844113b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { id: 'accessories', name: 'Tools & Accessories', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'LGT-001',
    name: 'Smart LED Bulb 10W RGB',
    shortDescription: 'Wi-Fi enabled smart bulb with 16 million colors.',
    description: 'Transform your home with this 10W Smart LED Bulb. Compatible with Alexa and Google Assistant, it offers 16 million colors and tunable white light. Schedule lights to turn on/off automatically.',
    price: 699,
    originalPrice: 1299,
    category: 'lighting',
    brand: 'LumiTech',
    image: 'https://images.unsplash.com/photo-1641113403042-0b6f6e5e0a35?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.8,
    reviews: 124,
    stock: 50,
    specs: {
      'Wattage': '10W',
      'Socket': 'E27',
      'Connectivity': 'Wi-Fi',
      'Lifespan': '25,000 Hours'
    },
    isBestSeller: true
  },
  {
    id: '2',
    sku: 'FAN-202',
    name: 'Aerodynamic Ceiling Fan',
    shortDescription: 'High-speed 1200mm ceiling fan with anti-dust coating.',
    description: 'Keep your room cool with this high-speed ceiling fan. Features an aerodynamic blade design for better air delivery and a dust-resistant coating for easy cleaning.',
    price: 3499,
    originalPrice: 4999,
    category: 'fans',
    brand: 'BreezeMaster',
    image: 'https://plus.unsplash.com/premium_photo-1699544799817-25c2a274f867?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.5,
    reviews: 89,
    stock: 20,
    specs: {
      'Sweep': '1200mm',
      'Speed': '380 RPM',
      'Power': '75W',
      'Color': 'Matte Black'
    },
    isNew: true
  },
  {
    id: '3',
    sku: 'WIR-303',
    name: 'Copper House Wire 90m',
    shortDescription: 'Flame retardant 2.5mm copper wire reel.',
    description: 'Premium quality 2.5mm sq. multi-strand copper wire. Insulated with flame retardant PVC, ensuring safety and durability for all your home electrical needs.',
    price: 2850,
    category: 'wires',
    brand: 'VoltSafe',
    image: 'https://images.unsplash.com/photo-1733138358145-a860f7062e1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.9,
    reviews: 210,
    stock: 100,
    specs: {
      'Length': '90 meters',
      'Gauge': '2.5 sq mm',
      'Material': 'Copper',
      'Insulation': 'FR PVC'
    }
  },
  {
    id: '4',
    sku: 'SWT-404',
    name: 'Modular Switch Panel (4-Gang)',
    shortDescription: 'Elegant polycarbonate modular switch plate.',
    description: 'Modernize your walls with this sleek 4-gang modular switch panel. Made from fire-resistant polycarbonate, it includes child-safety shutters.',
    price: 449,
    category: 'switches',
    brand: 'ClickOn',
    image: 'https://plus.unsplash.com/premium_photo-1745600338356-bda3325e8173?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.2,
    reviews: 45,
    stock: 75,
    specs: {
      'Type': 'Modular',
      'Modules': '4',
      'Material': 'Polycarbonate',
      'Color': 'White'
    }
  },
  {
    id: '5',
    sku: 'ACC-505',
    name: 'Digital Multimeter',
    shortDescription: 'Professional grade multimeter for electrical testing.',
    description: 'Essential tool for any electrician. Measures voltage, current, resistance, and continuity with high precision. Backlit LCD display for low light conditions.',
    price: 1899,
    originalPrice: 2499,
    category: 'accessories',
    brand: 'TechPro',
    image: 'https://images.unsplash.com/photo-1758295745926-88faff7ec2f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.7,
    reviews: 302,
    stock: 15,
    specs: {
      'Display': 'LCD Backlit',
      'Voltage AC/DC': '600V',
      'Safety Rating': 'CAT III',
      'Battery': '9V Included'
    },
    isBestSeller: true
  },
  {
    id: '6',
    sku: 'LGT-006',
    name: 'Industrial Flood Light 50W',
    shortDescription: 'Weatherproof outdoor LED flood light.',
    description: 'Heavy-duty 50W LED flood light suitable for gardens, parking lots, and building facades. IP65 waterproof rating ensures durability in all weather.',
    price: 2199,
    category: 'lighting',
    brand: 'LumiTech',
    image: 'https://plus.unsplash.com/premium_photo-1747204809003-6bd9033d500c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
    reviews: 56,
    stock: 30,
    specs: {
      'Wattage': '50W',
      'IP Rating': 'IP65',
      'Color Temp': '6500K',
      'Body': 'Die-cast Aluminum'
    }
  }
];

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};