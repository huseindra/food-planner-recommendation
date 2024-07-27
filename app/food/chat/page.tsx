"use client"
import { ResponseSection } from '@/app/home/components/RestaurantRecommendation';
import useFetch from '@/hook/useFetch';
import { headers } from 'next/headers';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Message {
  type: string;
  text: string;
}

// datetime: Date
// name: string
// price: number
// rating: number
// rating_count: number
// pictures: string[]

interface ResponseItem {
  id: number;
  name: string;
  image: string;
  rating: number;
  price?: string | number;
}

interface OrderRecommendationItem {
  _id: string;
  category: string[];
  description: string;
  discount_price: number;
  display: string;
  is_discount: boolean;
  merchant_area: string;
  merchant_id: string;
  merchant_name: string;
  pictures: string[];
  price: number;
  product: string;
  product_id: string;
  rating: number;
  review_count: number;
}


const responseOption = [
  {
    id: 1,
    name: 'Martabak Angkasa',
    image: '/assets/images/food/martabak-angkasa.webp',
    rating: 4.8,
    price: 10000,
  },
  {
    id: 2,
    name: 'Burger Bangor - Lebak Bulus',
    image: '/assets/images/food/burger-bangor.jpg',
    rating: 4.8,
    price: '50% off',
  },
  {
    id: 3,
    name: 'Selamat Pagi',
    image: '/assets/images/food/selamat-pagi.png',
    rating: 4.7,
    discount: '50% off',
  },
];

const ChatComponent = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    { type: 'hi', text: 'Welcome to the Meal Recommendation Assistant!' },
    {
      type: 'meal',
      text: 'I am here to help you choose the perfect meal, keeping you healthy and satisfied.',
    },
    {
      type: 'what',
      text: 'Let me know your preferences, and I will recommend the best options for breakfast, lunch, or dinner.',
    },
  ]);

  const [input, setInput] = useState('');
  const [matchedItems, setMatchedItems] = useState<ResponseItem[]>([]);
  const [sessionId, setSessionId] = useState('')
  const [suggetions, setSuggetions] = useState([])
  const [isFirstSuggetion, setIsFirSuggetion] = useState(false)
  const [orderRecommendation, setOrderRecommendation] = useState<OrderRecommendationItem[]>([])

  async function getSessionId() {
    const response = await useFetch('/chat', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      setSessionId(res.session_id)
    })

    return response
  }

  async function sendPrompt(sessionId: string, msg: string){
    const data = await useFetch(`/chat/${sessionId}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "message": msg
      })
    })
    .then((res) => {
      if(!isFirstSuggetion){
        setSuggetions(res.suggestions)
        setIsFirSuggetion(true)
      } else {
        // Empty suggetion to show order plan
        setSuggetions([])
      }
    })

    return data;
  }

  async function planOrder(msg: string){
    const data = await useFetch(`/order/plan`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "message": msg
      })
    })
    .then((res) => {
      setOrderRecommendation(res)
    })

    return data;
  }

  useEffect(() => {
    getSessionId()
  }, [])

  useEffect(() => {
    if(sessionId) sendPrompt(sessionId, '')
  }, [sessionId])

  const responses: Record<string, string> = {
    bantu: 'What do you need.',
    // Add more keyword-response pairs as needed
    help: 'How can I assist you?',
    breakfast: 'Here are some healthy breakfast options.',
    lunch: 'These are the top lunch recommendations.',
    dinner: 'Suggesting a dinner for 42 guests.',
    trending: 'Here are some trending meals today.'
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    const matchedItem = responseOption.find(item => item.name.toLowerCase() === input.toLowerCase());
    if (matchedItem) {
      // setMessages(prevMessages => [...prevMessages, { type: 'response', text: `Found: ${matchedItem.name}` }]);
      setMatchedItems([matchedItem]);
    } else {
      // Simulate an API response if no matching item is found
      setTimeout(() => {
        const dummyResponse: Message[] = [
          { type: 'response', text: 'This is a dummy response from the API.' },
        ];
        setMessages(prevMessages => [...prevMessages, ...dummyResponse]);
      }, 1000);
    }

    // sendPrompt(sessionId, newMessages.length > 0 ? newMessages[newMessages.length - 1].text : "")
    planOrder(newMessages.length > 0 ? newMessages[newMessages.length - 1].text : "")
  };


  return (
    <div className="max-w-sm mx-auto  bg-gray-50 min-h-screen flex flex-col">
      <header className="flex bg-gradient-to-r from-green-400 to-green-500  items-center justify-between mb-4 px-4 sticky top-0">
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
        {/* <div className="px-4 pb-4 pt-2 rounded-lg">
          <h1 className="text-2xl font-bold">Welcome to the Meal Recommendation Assistant!</h1>
          {messages.map((message:any, index:any) => (
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
        </div> */}
        {orderRecommendation.length > 0 && (
          <ResponseSection title="Rekomendasi restoran untukmu" items={orderRecommendation} />
        )}
        
        <div className="flex px-4 space-x-2 mb-4 text-sm">
          {suggetions.map((item) => <button className="flex-grow bg-gray-300 text-black p-4 rounded-lg" onClick={() => sendPrompt(sessionId, item)}>
            {item}
          </button>)}
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
