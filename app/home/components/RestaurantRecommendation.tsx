// components/RestaurantRecommendations.tsx
"use client"
import { formatIDR } from '@/library/format-idr';
import React from 'react';

const restaurants = [
  {
    id: 1,
    name: 'Sate Madura Camat',
    image: '/assets/images/food/sate-madura.jpg',
    distance: '0.9 km',
    rating: 4.4,
    discount: '50% off',
    ad: true,
  },
  {
    id: 2,
    name: 'Kumo Cake - Lebak Bulus',
    image: '/assets/images/food/kumo-cake.jpg',
    distance: '1.2 km',
    rating: 4.9,
    discount: '50% off',
    ad: false,
  },
  {
    id: 3,
    name: 'Mie Gacoan',
    image: '/assets/images/food/mie-gacoan.webp',
    distance: '8.4 km',
    rating: 4.5,
    discount: '50% off',
    ad: false,
  },
];

const dinnerOptions = [
  {
    id: 1,
    name: 'Martabak Angkasa',
    image: '/assets/images/food/martabak-angkasa.webp',
    distance: '1.1 km',
    rating: 4.8,
    discount: '50% off',
    ad: true,
  },
  {
    id: 2,
    name: 'Burger Bangor - Lebak Bulus',
    image: '/assets/images/food/burger-bangor.jpg',
    distance: '0.9 km',
    rating: 4.8,
    discount: '50% off',
    ad: false,
  },
  {
    id: 3,
    name: 'Selamat Pagi',
    image: '/assets/images/food/selamat-pagi.png',
    distance: '4.5 km',
    rating: 4.7,
    discount: '50% off',
    ad: false,
  },
];

const RestaurantRecommendations: React.FC = () => {
  return (
    <div className="p-4">
      <Section title="Rekomendasi restoran untukmu" items={restaurants} />
      <Section title="Order dinner from" items={dinnerOptions} />
    </div>
  );
};

const Section: React.FC<{ title: string; items: any[] }> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-sm text-blue-500">→</button>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="w-60 flex-shrink-0">
      <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-lg mb-2" />
      <h3 className="text-sm font-semibold truncate">{item.name}</h3>
      <div className="flex items-center text-sm text-gray-500">
        {item.ad && <span className="mr-2 text-xs bg-gray-200 px-1 rounded">Ad</span>}
        <span>{item.distance}</span>
        <span className="mx-1">·</span>
        <span className="flex items-center">
          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.392 3.118 1.027-5.992L1 8.382l6.104-.89L10 2l2.896 5.492 6.104.89-4.635 3.744 1.027 5.992z" />
          </svg>
          {item.rating}
        </span>
      </div>
      <span className="text-xs text-green-600">{item.discount}</span>
    </div>
  );
};

export const ResponseSection: React.FC<{ title: string; items: any[] }> = ({ title, items }) => {
  return (
    <div className="mb-4 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {items.map((item) => (
          <CardResponse key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// name: 'Martabak Angkasa',
// image: '/assets/images/food/martabak-angkasa.webp',
// rating: 4.8,
// price: 10000,

const CardResponse: React.FC<{ item: any }> = ({ item }) => {
  return (
    <div className="w-60 flex-shrink-0">
      <img src={item.pictures.length > 0 ? item.pictures[0] : ""} alt={item.product} className="w-full h-32 object-cover rounded-lg mb-2" />
      <h3 className="text-sm font-semibold truncate">{item.product}</h3>
      <div className="flex items-center text-sm text-gray-500">
      <span className="text-md font-bold text-green-600">{formatIDR(item.price)}</span>
        <span className="mx-1">·</span>
        <span className="flex items-center">
          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 15l-5.392 3.118 1.027-5.992L1 8.382l6.104-.89L10 2l2.896 5.492 6.104.89-4.635 3.744 1.027 5.992z" />
          </svg>
          {item.rating}
        </span>
      </div>
    </div>
  );
};

export default RestaurantRecommendations;
