'use client';
import { useState } from 'react';
import { initialGames } from '@/data/games';
import GameForm from './GameForm';
import Link from 'next/link';

type GameItem = (typeof initialGames)[number];

export default function GameExplorer() {
  const [games, setGames] = useState<GameItem[]>(initialGames);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingGame, setEditingGame] = useState<GameItem | null>(null);

  // ฟังก์ชันเพิ่มหรืออัปเดตข้อมูล (Immutable)
  const handleSaveGame = (gameData: Omit<GameItem, 'id'>) => {
    if (editingGame) {
      setGames(games.map(g => g.id === editingGame.id ? { ...g, ...gameData } : g));
      setEditingGame(null);
    } else {
      const newGame: GameItem = { id: String(Date.now()), ...gameData };
      setGames([newGame, ...games]);
    }
  };

  // ฟังก์ชันลบข้อมูล (Immutable)
  const handleDelete = (id: GameItem['id']) => {
    setGames(games.filter(g => g.id !== id));
  };

  // กรองข้อมูลตามช่องค้นหา
  const filteredGames = games.filter(g => 
    g.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex gap-6 p-8">
      {/* ฝั่งซ้าย: ฟอร์ม */}
      <div className="w-1/3">
        <GameForm 
          onSubmit={handleSaveGame} 
          editingGame={editingGame as any} 
          onCancel={() => setEditingGame(null)} 
        />
      </div>

      {/* ฝั่งขวา: ช่องค้นหาและการแสดงผล Card */}
      <div className="w-2/3 space-y-4">
        <input 
          type="text" 
          placeholder="ค้นหาชื่อเกม..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border p-3 rounded-lg shadow-sm"
        />

        <div className="grid grid-cols-2 gap-4">
          {filteredGames.map((game) => (
            <div key={game.id} className="bg-gray-900 text-white p-5 rounded-xl shadow-md space-y-3 relative">
              <span className="absolute top-4 right-4 text-xs bg-gray-700 px-2 py-1 rounded">
                {game.status}
              </span>
              <Link href={`/games/${game.id}`} className="text-xl font-bold hover:underline">
                {game.title}
              </Link>
              <p className="text-sm text-gray-300">แพลตฟอร์ม: {game.platform}</p>
              <p className="text-sm text-gray-300">เวลาที่คาดว่าจะเล่น: {game.estimatedHours} ชั่วโมง</p>
              
              <div className="flex space-x-2 pt-2">
                <button 
                  onClick={() => setEditingGame(game)} 
                  className="bg-gray-700 px-3 py-1 rounded text-sm"
                >
                  แก้ไข
                </button>
                <button 
                  onClick={() => handleDelete(game.id)} 
                  className="bg-red-900 px-3 py-1 rounded text-sm"
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}