"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const DeliveryScreen = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="max-w-sm mx-auto  bg-gray-50">
        <header className="flex bg-gradient-to-r from-green-400 to-green-500  items-center justify-between mb-4 px-4">
          <div className="flex items-center space-x-2 py-12">
            <button onClick={() => router.push('/')} className="text-white">
              <svg
                className="w-5 h-5 fill-white-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <div className="flex flex-col">
              <h1 className="text-white text-sm">DELIVER TO</h1>
              <span className="text-white font-bold">
                GRABBike Pedestrian...
              </span>
            </div>
            <button className="text-white">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex space-x-4">
            <button className=" bg-green-100  backdrop-blur-md  p-2 rounded-full">
              <svg
                className="w-6 h-6 fill-white-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
              </svg>
            </button>
            <button className="bg-green-100  backdrop-blur-md  p-2 rounded-full">
              <svg
                className="w-6 h-6 fill-white-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 144zM80 352c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 336c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 240z" />
              </svg>
            </button>
          </div>
        </header>
        <section className="relative mt-2rem">
          <div className="absolute inset-0 bg-white rounded-md absolute-search shadow-md flex items-center px-4 py-8 ">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6M3 10a7 7 0 1114 0a7 7 0 01-14 0z"
              />
            </svg>
            <input
              className="ml-2  border-none outline-none text-gray-600 placeholder-gray-400"
              type="text"
              placeholder="What shall we deliver?"
            />
          </div>
        </section>
        <section className="px-4 ">
          <div className="flex space-x-2 mt-16 mb-4">
            <button className="bg-green-200 text-green-600 text-sm font-bold py-2 px-4 rounded-xl">
              Delivery
            </button>
            <button className="bg-gray-200 text-gray-600 text-sm font-md py-2 px-4 rounded-xl">
              Dine Out Deals
            </button>
            <button className="bg-gray-200 text-gray-600 text-sm font-md py-2 px-4 rounded-xl">
              Pickup
            </button>
          </div>
          <div>
          <div
              className="w-320 bg-gray-200 rounded-xl flex-shrink-0 mb-4 cursor-pointer"
              onClick={() => router.push('/food/chat')}
            >
              <div className="h-60 bg-green-200 rounded-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover"
                  src={'https://img.freepik.com/premium-photo/robot-domestic-assistance-cooking-food-kitchen-artificial-intelligence-futuristic-concept-generated-ai_167689-3881.jpg'}
                  alt={'robo assistance'}
                />
                <div className="absolute bottom-5 left-5 right-5 bg-gradient-to-t from-black to-transparent p-2">
                  <h4 className="text-lg font-bold text-white">Robo-food Assistance</h4>
                  <p className="text-md text-gray-300">It offers personalized meal recommendations in the Grab app.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-red-100 text-black p-4 rounded-xl">
              <h2 className="font-bold">Near Me</h2>
              <p className='text-sm'>Get it quick</p>
            </div>
            <div className="bg-blue-100 text-black p-4 rounded-xl">
              <h2 className="font-bold">Big Promo</h2>
              <p className='text-sm'>Save up to 70%</p>
            </div>
            <div className="bg-yellow-100 text-black p-4 rounded-xl">
              <h2 className="font-bold">All-in from 22k</h2>
              <p className='text-sm'>Full portion & includes delivery!</p>
            </div>
            <div className="bg-green-100 text-black p-4 rounded-xl">
              <h2 className="font-bold">Payday Flash</h2>
              <p className='text-sm'>Disc up to 100%, order now</p>
            </div>
          </div>
        </section>

        <section className=' p-4'>
          <h2 className="font-bold text-lg mb-2">Pesan Sekarang</h2>
          <div className="bg-white ">
            <img
              className="w-full rounded-md mb-2"
              src="/assets/images/banner/banner-1.webp"
              height={'100px'}
              alt="Popeyes"
            />
            <div className="flex flex-col justify-between text-sm">
              <h3 className="font-bold">
                2 Ayam Cuma 35ribu, Hemat Sampai 39%
              </h3>
              <span className="text-gray-500">Ad · Popeyes</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeliveryScreen;
