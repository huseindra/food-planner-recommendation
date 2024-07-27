"use client"
import React, { useState } from 'react';
import RestaurantRecommendations from './components/RestaurantRecommendation';
import Link from 'next/link';

const iconTop = [
  {
    id: 1,
    name: 'Bike',
    icon: '/assets/icon/bike.svg',
    link:'/bike'
  },
  {
    id: 2,
    name: 'Car',
    icon: '/assets/icon/car.svg',
    link:'/car'
  },
  {
    id: 3,
    name: 'Food',
    icon: '/assets/icon/food.svg',
    link:'/food'
  },
  {
    id: 4,
    name: 'Mart',
    icon: '/assets/icon/mart.svg',
    link:'/mart'
  },
  {
    id: 5,
    name: 'All',
    icon: '/assets/icon/all.svg',
    link:'/all'
  },
];

const bottomNavigation = [
  {
    id: 1,
    name: 'Home',
    icon: (
      <svg
        className="w-5 h-5 fill-green-1000 mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: 'Activity',
    icon: (
      <svg
        className="w-5 h-5 text-gray-800 mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: 'Payment',
    icon: (
      <svg
        className="w-5 h-5 text-gray-800 mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: 'Messages',
    icon: (
      <svg
        className="w-5 h-5 text-gray-800 mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z" />
      </svg>
    ),
  },
  {
    id: 5,
    name: 'Account',
    icon: (
      <svg
        className="w-5 h-5 text-gray-800 mb-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
      </svg>
    ),
  },
];

const restaurants = [
  {
    id: 1,
    name: 'Pizza Hut Delivery',
    description: 'Delivering hot, cheesy pizzas straight to your doorstep.',
    image: '/assets/images/pizza.jpeg',
  },
  {
    id: 2,
    name: 'Burger King',
    description: 'Delivering flame-grilled perfection with every bite.',
    image: '/assets/images/food.jpeg',
  },
  {
    id: 3,
    name: 'Grill Master',
    description: 'Bringing expertly grilled flavors to your home.',
    image: '/assets/images/potato.jpeg',
  },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-sm mx-auto p-4 bg-gray-50">
      <div className="flex items-center justify-between mb-4 gap-4">
        <button className="p-4 bg-white rounded-md shadow ">
          <svg
            className="w-5 h-5 fill-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM152 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
          </svg>
        </button>
        <div className="flex w-full items-center bg-white rounded-md shadow px-4 py-2">
          <div className="flex w-full items-center justify-between ">
            <svg
              className="w-5 h-5 fill-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              type="text"
              placeholder="Search food"
              className="text-sm ml-2 border-r-2 border-right-width border-gray-150 focus:outline-none"
            />
            <button className="p-2">
              <svg
                className="w-5 h-5 fill-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between space-x-4 overflow-x-auto mb-4">
        {iconTop.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Link href={`${item.link}`}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <img
                  className="bg-contain"
                  src={`${item.icon}`}
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-xs mt-2">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-md shadow mb-4">
        <div className="p-4">
          <h3 className="text-lg font-bold">Discover things you’d love</h3>
          <span className="text-sm text-gray-500">
            Ad · Swipe to be inspired
          </span>
        </div>
        <div className="flex space-x-4 overflow-x-auto p-4">
          {restaurants.map((item, index) => (
            <div
              key={index}
              className="w-40 bg-gray-200 rounded-xl flex-shrink-0"
            >
              <div className="h-60 bg-green-200 rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RestaurantRecommendations />
      <div className="bg-white rounded-md shadow mb-4"></div>
      <nav className="max-w-sm mx-auto fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-around py-2">
          {bottomNavigation.map((tab, index) => (
            <button key={index} className="flex flex-col items-center">
              {tab.icon}
              <span
                className={`text-xs ${
                  activeIndex === index ? 'text-green-500' : 'text-gray-500'
                }`}
              >
                {tab.name}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
