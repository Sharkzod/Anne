'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';

type HeartType = {
  id: number;
  left: number;
  animationDuration: number;
  delay: number;
  size: number;
};

const images = [
  '/anne-2.jpg',
  '/anne-6.jpg',
  '/anne-3.jpg',
  '/anne-8.jpg',
  '/anne-7.jpg',
  '/anne-1.jpg',
];
const videos = [
  '/anne-4.mp4',
];

const admirationFacts = [
  "Your smile brightens my day in an instant",
  "There's a special light that follows you everywhere",
  "Your laughter is my favorite sound",
  "Your kindness to others inspires me",
  "You have a way of making ordinary moments special",
  "Your intelligence and perspective amaze me",
  "You have the most endearing little habits",
  "Your strength in challenging times is admirable",
  "Your compassion knows no bounds",
  "You have a beautiful soul that shines through",
  "Your energy is infectious in the best way",
  "You understand things without words being spoken",
  "Your creativity brings color to the world",
  "Your presence makes any place feel warmer"
];

const specialThoughts = [
  "Some moments are too special not to celebrate",
  "Getting to know you has been a wonderful experience",
  "I find myself smiling at memories of our conversations",
  "You've given me so many reasons to look forward to tomorrow",
  "I appreciate every moment we've shared"
];

const RomanticPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [currentThoughtIndex, setCurrentThoughtIndex] = useState(0);
  const [hearts, setHearts] = useState<HeartType[]>([]);

  // Create floating hearts
  useEffect(() => {
    const addHeart = () => {
      const heart = {
        id: Date.now(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
        size: Math.random() * 20 + 10
      };
      setHearts(prev => [...prev, heart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, 10000);
    };

    const heartInterval = setInterval(addHeart, 800);
    return () => clearInterval(heartInterval);
  }, []);

  // Rotate through videos every 30 seconds
  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 30000);
    return () => clearInterval(videoInterval);
  }, []);

  // Rotate through images every 10 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(imageInterval);
  }, []);

  // Rotate through facts every 7 seconds
  useEffect(() => {
    const factInterval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % admirationFacts.length);
    }, 7000);
    return () => clearInterval(factInterval);
  }, []);

  // Rotate through special thoughts every 15 seconds
  useEffect(() => {
    const thoughtInterval = setInterval(() => {
      setCurrentThoughtIndex((prev) => (prev + 1) % specialThoughts.length);
    }, 15000);
    return () => clearInterval(thoughtInterval);
  }, []);

  return (
    <>
      <Head>
        <title>To Someone Special</title>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </Head>

      {/* Floating Hearts */}
      {hearts.map(heart => (
        <div 
          key={heart.id}
          className="absolute text-pink-400 opacity-70 z-0 animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-20px',
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`
          }}
        >
          ❤
        </div>
      ))}

      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
          key={videos[currentVideoIndex]}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 to-purple-900/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 text-center text-white overflow-hidden">
        {/* Header */}
        <header className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-romantic mb-4 text-romantic-pink drop-shadow-lg">
            To Someone Amazing
          </h1>
          <p className="text-xl md:text-2xl font-light italic text-romantic-gold">
            Celebrating the wonderful person you are
          </p>
        </header>

        {/* Special Thought Banner */}
        <div className="w-full max-w-2xl mb-8 bg-pink-900/50 p-4 rounded-lg border border-pink-300/30 shadow-lg transform hover:scale-102 transition-all duration-500">
          <p className="text-xl md:text-2xl font-dancing-script animate-pulse">
            "{specialThoughts[currentThoughtIndex]}"
          </p>
        </div>

        {/* Main Image */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-8 rounded-2xl overflow-hidden border-4 border-romantic-gold shadow-2xl transform hover:scale-105 transition-transform duration-500 relative">
          <img 
            src={images[currentImageIndex]} 
            alt="Someone special" 
            className="w-full h-full object-cover aspect-square"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center pb-4">
            {/* <span className="text-white text-xl font-light">Radiating Beauty</span> */}
          </div>
        </div>

        {/* Admiration Fact */}
        <div className="bg-gradient-to-r from-pink-900/70 to-purple-900/70 p-6 rounded-xl max-w-2xl mb-8 transition-all duration-1000 backdrop-blur-sm border border-pink-200/20">
          <p className="text-2xl md:text-3xl font-dancing-script animate-pulse">
            "{admirationFacts[currentFactIndex]}"
          </p>
        </div>

        {/* Gallery Section */}
        <section className="w-full max-w-4xl mb-12 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-200/20">
          <h2 className="text-3xl md:text-4xl font-romantic mb-6 text-romantic-gold">
            Moments Captured
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="aspect-square overflow-hidden rounded-xl border-2 border-white/30 hover:border-romantic-pink transition-all duration-300 relative group"
              >
                <img 
                  src={img} 
                  alt={`Special moment ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-light"></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Appreciation Message */}
        <section className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl max-w-3xl mb-8 border border-romantic-gold/50 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-romantic mb-6 text-romantic-pink">
            My Appreciation
          </h2>
          <div className="text-left text-lg md:text-xl space-y-4 font-serif">
            <p>Hey Anne,</p>
            <p>
              I wanted to create something to express how much I've enjoyed getting to know you. 
              From our conversations to the moments we've shared, you've left a remarkable impression on me.
            </p>
            <p>
              Your unique perspective on life fascinates me, the way you care for others inspires me, 
              and your genuine nature is something I truly admire. There's a special quality about you 
              that's rare and wonderful.
            </p>
            <p>
              I appreciate how you make time feel different when we're together—lighter, more meaningful, 
              and filled with possibilities. Your laughter has a way of turning ordinary moments into 
              memories I find myself revisiting.
            </p>
            <p>
              This is just a small token of my appreciation for who you are and the joy you bring to those around you.
            </p>
            <div className="text-right mt-8">
              <p className="font-romantic text-2xl">With sincere admiration,</p>
              <p className="font-romantic text-2xl text-romantic-pink">Godstime</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto py-6 text-sm opacity-80 font-light">
          <p>Created to celebrate someone extraordinary</p>
          <p>© {new Date().getFullYear()} - A token of appreciation</p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: 1;
        }
        .font-romantic {
          font-family: 'Great Vibes', cursive;
        }
        .font-dancing-script {
          font-family: 'Dancing Script', cursive;
        }
        .text-romantic-pink {
          color: #ffb6c1;
        }
        .text-romantic-gold {
          color: #f9d5bb;
        }
        .text-romantic-red {
          color: #ff6b6b;
        }
        .text-romantic-purple {
          color: #d8bfd8;
        }
        .animate-fade-in {
          animation: fadeIn 2s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default RomanticPage;