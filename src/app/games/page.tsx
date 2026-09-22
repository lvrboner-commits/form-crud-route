'use client';
import { useState } from 'react';
import { Game } from '../types/game'; // ปรับ path ตามจริง

import GameForm from '../components/GameForm'; // ปรับ path ตามจริง
import Link from 'next/link';
import { initialGames } from '@/data/games';

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingGame, setEditingGame] = useState<Game | null>(null);

  const handleSaveGame = (gameData: Omit<Game, 'id'>) => {
    if (editingGame) {
      setGames(games.map(g => (g.id === editingGame.id ? { ...g, ...gameData } : g)));
      setEditingGame(null);
    } else {
      const newGame: Game = { id: Date.now().toString(), ...gameData };
      setGames([newGame, ...games]);
    }
  };

  const handleDelete = (id: string | number) => {
    setGames(games.filter(g => g.id !== id));
  };

  const filteredGames = games.filter(g => 
    g.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* ส่วนหัวข้อ */}
      <div className="mb-8 border-b pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">🎮 Game Backlog</h1>
          <p className="text-sm text-gray-500 mt-1">จัดการและติดตามรายชื่อเกมที่คุณอยากเล่นหรือกำลังเล่นอยู่</p>
        </div>
        <div className="text-sm bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-medium shadow-sm">
          จำนวนเกมทั้งหมด: {games.length} เกม
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* ฟอร์มด้านซ้าย */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-6">
          <GameForm 
            onSubmit={handleSaveGame} 
            editingGame={editingGame as any} 
            onCancel={() => setEditingGame(null)} 
          />
        </div>

        {/* รายการเกมด้านขวา */}
        <div className="lg:col-span-2 space-y-6">
          {/* ช่องค้นหา */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="🔍 ค้นหาชื่อเกมในคลัง..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-200 bg-white px-4 py-3.5 pl-11 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <span className="absolute left-4 top-4 text-gray-400">🔍</span>
          </div>

          {/* การ์ดรายการเกม */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <div key={game.id} className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative border border-gray-800">
                  <span className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium ${
                    game.status === 'กำลังเล่น' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                    game.status === 'เล่นจบแล้ว' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                    game.status === 'ยังไม่เริ่ม' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}>
                    {game.status}
                  </span>

                  <div className="space-y-2 pr-12">
                    <Link href={`/games/${game.id}`} className="text-xl font-bold hover:text-indigo-300 transition block">
                      {game.title}
                    </Link>
                    <p className="text-sm text-gray-300 flex items-center gap-1.5">
                      <span className="text-gray-400">🎯 แพลตฟอร์ม:</span> {game.platform}
                    </p>
                    <p className="text-sm text-gray-300 flex items-center gap-1.5">
                      <span className="text-gray-400">⏱️ เวลาเล่น:</span> {game.estimatedHours} ชั่วโมง
                    </p>
                  </div>
                  
                  <div className="flex space-x-2 pt-5 mt-4 border-t border-gray-800">
                    <button 
                      onClick={() => setEditingGame(game)} 
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 py-1.5 px-3 rounded-lg text-sm font-medium transition border border-gray-700"
                    >
                      ✏️ แก้ไข
                    </button>
                    <button 
                      onClick={() => handleDelete(game.id)} 
                      className="bg-rose-950/50 hover:bg-rose-900 text-rose-300 py-1.5 px-3 rounded-lg text-sm font-medium transition border border-rose-900/50"
                    >
                      🗑️ ลบ
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-400 text-lg">ไม่พบเกมที่คุณค้นหา</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}