"use client";

import { ShoppingCart, Home, ClipboardList, User, Plus } from 'lucide-react';

export default function FreshReadyHome() {
  
  const handleOrder = (productName: string, price: number) => {
    // 🛑 REPLACE with Tuhin's number (e.g., "8801700000000")
    const phoneNumber = "8801XXXXXXXXX"; 
    const message = `Assalamu Alaikum! I want to order ${productName} for ৳${price}. Please confirm my order for Mohanagar Project.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans text-black">
      {/* Header */}
      <div className="bg-white p-5 border-b sticky top-0 z-10 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="text-2xl font-black text-green-600">Fresh&Ready</h1>
          <p className="text-gray-500 text-xs font-medium tracking-wide">Mohanagar Project • Daily Fresh Delivery</p>
        </div>
        <div className="bg-green-100 p-2 rounded-full text-green-600"><User size={20} /></div>
      </div>

      {/* App Content */}
      <div className="p-4 space-y-4">
        <div className="bg-green-600 rounded-3xl p-6 text-white shadow-lg">
          <h2 className="text-xl font-bold italic underline decoration-white/30">100% Net Weight</h2>
          <p className="text-sm opacity-90 font-medium mt-1">Pay for meat, not waste. Cleaned & Vacuum Sealed.</p>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mt-6 pl-1">Available Today</h2>
        
        {/* Beef Product Card */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-extrabold text-lg text-gray-900">Beef Standard Cut</h3>
              <p className="text-xs text-gray-400 font-medium">Bone-in, Fat Trimmed</p>
            </div>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Fresh</span>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-2xl font-black text-green-600">৳ 850 <span className="text-sm font-normal text-gray-400">/kg</span></p>
            <button 
              onClick={() => handleOrder("Beef Standard Cut", 850)}
              className="bg-green-600 text-white p-3 px-6 rounded-2xl shadow-md flex items-center gap-2 font-bold active:scale-95 transition-all"
            >
              <Plus size={20} /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-around items-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <Home className="text-green-600" />
        <ClipboardList className="text-gray-300" />
        <ShoppingCart className="text-gray-300" />
        <User className="text-gray-300" />
      </div>
    </div>
  );
}