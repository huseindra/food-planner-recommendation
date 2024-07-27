"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ChatComponent = () => {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { type: 'response', text: 'Welcome to the Meal Recommendation Assistant!' },
    {
      type: 'response',
      text: 'I am here to help you choose the perfect meal, keeping you healthy and satisfied.',
    },
    {
      type: 'response',
      text: 'Let me know your preferences, and I will recommend the best options for breakfast, lunch, or dinner.',
    },
  ]);

  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Dummy API response
    setTimeout(() => {
      const dummyResponse = {
        type: 'response',
        text: 'This is a dummy response from the API.',
      };
      setMessages((prevMessages) => [...prevMessages, dummyResponse]);
    }, 1000);
  };

  return (
    <div className="max-w-sm mx-auto  bg-gray-50 min-h-screen flex flex-col">
      <header className="flex bg-gradient-to-r from-green-400 to-green-500  items-center justify-between mb-4 px-4">
        <div className="flex items-center space-x-2 py-4">
          <button onClick={() => router.push('/food')} className="text-white">
            <svg
              className="w-5 h-5 fill-white-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <div className="flex flex-col">
            <h1 className="text-white text-md font-semibold">
              Robo-food Assistance
            </h1>
          </div>
        </div>
      </header>
      <div className="flex-grow">
        <div className="p-4 rounded-lg mb-4">
          <h1 className="text-2xl font-bold">Welcome to the Meal Recommendation Assistant!</h1>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mt-2 text-sm ${message.type === 'user' ? 'text-right' : ''}`}
            >
              <span
                className={`inline-block px-4 py-2 rounded-lg ${
                  message.type === 'user' ? 'bg-green-500' : 'bg-gray-100'
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
        <div className="flex px-4 space-x-2 mb-4 text-sm">
          <button className="flex-grow bg-gray-300 text-black p-4 rounded-lg">
            What are some healthy breakfast options today?
          </button>
          <button className="flex-grow bg-gray-300 text-black p-4 rounded-lg">
            What are the top lunch recommendations?
          </button>
        </div>
        <div className="flex px-4  space-x-2 mb-4 text-sm">
          <button className="flex-grow bg-gray-300 text-black p-4 rounded-lg">
            Suggest a dinner for 42 guests
          </button>
          <button className="flex-grow bg-gray-300 text-black p-4 rounded-lg">
            What are some trending meals today?
          </button>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 bg-gray-100 p-4 border rounded-md border-gray-300">
      <div className="relative flex items-center">
          <input
            type="text"
            className="flex-grow p-4 text-xs border rounded-md border-gray-300 bg-gray-200 text-black pr-10"
            placeholder="Send a message."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            className="absolute right-4 p-2 bg-gray-50 rounded-md"
            onClick={handleSendMessage}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3L3 12L9 21"
                stroke="#1E293B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12H21V3"
                stroke="#1E293B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
