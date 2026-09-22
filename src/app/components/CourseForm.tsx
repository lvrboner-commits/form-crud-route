'use client';
import { useState, useEffect } from 'react';

type GameStatus = 'Backlog' | 'กำลังเล่น' | 'เล่นจบแล้ว' | 'ยังไม่เริ่ม';

type Game = {
  id: number;
  title: string;
  platform: string;
  estimatedHours: number;
  status: GameStatus;
};

interface GameFormProps {
  onSubmit: (gameData: Omit<Game, 'id'>) => void;
  editingGame: Game | null;
  onCancel: () => void;
}

export default function GameForm({ onSubmit, editingGame, onCancel }: GameFormProps) {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [estimatedHours, setEstimatedHours] = useState<number>(0);
  const [status, setStatus] = useState<GameStatus>('Backlog');

  useEffect(() => {
    if (editingGame) {
      setTitle(editingGame.title);
      setPlatform(editingGame.platform);
      setEstimatedHours(editingGame.estimatedHours);
      setStatus(editingGame.status);
    } else {
      setTitle('');
      setPlatform('');
      setEstimatedHours(0);
      setStatus('Backlog');
    }
  }, [editingGame]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({
      title,
      platform,
      estimatedHours: Number(estimatedHours),
      status,
    });

    setTitle('');
    setPlatform('');
    setEstimatedHours(0);
    setStatus('Backlog');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border space-y-4">
      <h2 className="text-xl font-bold text-gray-800">
        {editingGame ? 'แก้ไขข้อมูลเกม' : 'เพิ่มเกมใหม่'}
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อเกม</label>
        <input 
          type="text" 
          placeholder="เช่น Roblox" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded-lg text-black bg-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">แพลตฟอร์ม</label>
        <input 
          type="text" 
          placeholder="เช่น PC, Mobile" 
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full border p-2 rounded-lg text-black bg-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">จำนวนชั่วโมงที่คาดว่าจะเล่น</label>
        <input 
          type="number" 
          placeholder="เช่น 15" 
          value={estimatedHours}
          onChange={(e) => setEstimatedHours(Number(e.target.value))}
          className="w-full border p-2 rounded-lg text-black bg-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">สถานะ</label>
        <select 
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          className="w-full border p-2 rounded-lg text-black bg-white"
        >
          <option value="Backlog">Backlog</option>
          <option value="กำลังเล่น">กำลังเล่น</option>
          <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
          <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
        </select>
      </div>

      <div className="flex space-x-2 pt-2">
        <button 
          type="submit" 
          className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          {editingGame ? 'บันทึกการแก้ไข' : 'เพิ่มเกม'}
        </button>
        {editingGame && (
          <button 
            type="button" 
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            ยกเลิก
          </button>
        )}
      </div>
    </form>
  );
}