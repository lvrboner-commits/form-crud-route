"use client";

import React from "react";


type Band = {
  id: string;
  name: string;
  description: string;
  image: string;
  genre: string;
  yearFormed: number | string;
  members: BandMember[];
  likes?: number;
  isFollowing?: boolean;
};

interface BandCardProps {
  band: Band;
  onToggleFollow: (id: string) => void;
  onLike: (id: string) => void;
}

type BandMember = {
  id: string | number;
  image: string;
  name: string;
  role: string;
};

export default function BandCard({ band, onToggleFollow, onLike }: BandCardProps) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-lg shadow-gray-100 bg-white p-5 flex flex-col justify-between h-full transition-all">
      <div>
        <img
          src={band.image}
          alt={band.name}
          className="w-full h-48 object-cover rounded-xl mb-4 shadow-sm"
        />
        <h3 className="text-xl font-extrabold text-gray-900 tracking-wide">{band.name}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">{band.description}</p>
        
        <div className="space-y-1 text-sm text-gray-600 mb-4">
          <p>แนวเพลง: <span className="font-semibold text-gray-800">{band.genre}</span></p>
          <p>ปีที่ก่อตั้ง: <span className="font-semibold text-gray-800">{band.yearFormed}</span></p>
          <p>จำนวนสมาชิก: <span className="font-semibold text-gray-800">{band.members.length} คน</span></p>
        </div>

        {/* แสดงรายชื่อสมาชิก */}
        <div className="text-sm text-gray-500 mt-2">
          <p className="font-bold text-gray-800 mb-2">สมาชิก:</p>
          <div className="flex flex-col gap-2">
            {band.members.map((member: BandMember) => (
              <div key={member.id} className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100 shadow-2xs">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-9 h-9 rounded-full object-cover shadow-sm flex-shrink-0" 
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-xs sm:text-sm">{member.name}</span>
                  <span className="text-gray-400 text-[11px]">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
        <button
          onClick={() => onLike(band.id)}
          className="bg-pink-50 text-pink-600 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold hover:bg-pink-100 transition"
        >
          ❤️ {band.likes || 0} Likes
        </button>

        <button
          onClick={() => onToggleFollow(band.id)}
          className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
            band.isFollowing
              ? "bg-gray-100 text-gray-600 hover:bg-gray-200"
              : "bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:opacity-90 shadow-md"
          }`}
        >
          {band.isFollowing ? "กำลังติดตามแล้ว" : "ติดตาม"}
        </button>
      </div>
    </div>
  );
}