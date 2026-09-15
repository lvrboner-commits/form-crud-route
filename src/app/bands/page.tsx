"use client";

import { useState } from "react";
import BandCard from "../components/BandCard";
import { bandsData } from "@/data/ฺbandsData";


type Band = (typeof bandsData)[number] & {
  isFollowing?: boolean;
  likes?: number;
};

export default function BandsPage() {
  const [bands, setBands] = useState<Band[]>(
    bandsData.map((band: Band) => ({
      ...band,
      isFollowing: band.isFollowing ?? false,
      likes: band.likes ?? 0,
    }))
  );

  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleFollow = (id: string) => {
    setBands((prevBands) =>
      prevBands.map((band) =>
        band.id === id ? { ...band, isFollowing: !band.isFollowing } : band
      )
    );
  };

  const handleLike = (id: string) => {
    setBands((prevBands) =>
      prevBands.map((band) =>
        band.id === id ? { ...band, likes: (band.likes || 0) + 1 } : band
      )
    );
  };

  const filteredBands = bands.filter((band) =>
    band.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const followingCount = bands.filter((band) => band.isFollowing).length;

  return (
    <main className="min-h-screen bg-gradient-to-tr from-pink-50/40 via-white to-purple-50/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
            วงดนตรีที่ฉันชอบ 💖
          </h1>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Discover & Follow Your Favorite K-Pop / T-Pop Idols
          </p>
        </div>

        {/* Control Panel: Search & Stats */}
        <div className="bg-white/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-sm border border-gray-100 mb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Search Bar */}
          <div className="w-full sm:w-96 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="ค้นหาชื่อวงดนตรี..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white text-gray-800 text-sm transition-all"
            />
          </div>

          {/* Stats Badge */}
          <div className="flex items-center gap-2 text-sm font-semibold text-purple-700 bg-purple-50 px-5 py-2.5 rounded-xl border border-purple-100 shadow-sm">
            <span>⭐ กำลังติดตามอยู่:</span>
            <span className="text-pink-600 font-bold text-base">{followingCount}</span>
            <span>วง</span>
          </div>
        </div>

        {/* Band Cards Grid or Empty State */}
        {filteredBands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredBands.map((band) => (
              <div key={band.id} className="transition-all duration-300 hover:-translate-y-1.5 h-full">
                <BandCard
                  band={band}
                  onToggleFollow={handleToggleFollow}
                  onLike={handleLike}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-16 text-center shadow-sm">
            <div className="text-5xl mb-3 animate-bounce">📭</div>
            <h3 className="text-lg font-bold text-gray-800">ไม่พบวงดนตรีที่คุณค้นหา</h3>
            <p className="text-sm text-gray-500 mt-1">ลองเปลี่ยนคำค้นหาใหม่อีกครั้งดูนะ</p>
          </div>
        )}
      </div>
    </main>
  );
}