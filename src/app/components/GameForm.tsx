'use client';
import { useState, useEffect } from 'react';

type GameStatus = 'ยังไม่เริ่ม' | 'กำลังเล่น' | 'เล่นจบแล้ว';

interface Game {
  id: number;
  title: string;
  platform: string;
  estimatedHours: number;
  status: GameStatus;
}

interface GameFormProps {
  onSubmit: (game: Omit<Game, 'id'>) => void;
  editingGame?: Game | null;
  onCancel: () => void;
}

export default function GameForm({ onSubmit, editingGame, onCancel }: GameFormProps) {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('');
  const [estimatedHours, setEstimatedHours] = useState('');
  const [status, setStatus] = useState<GameStatus>('ยังไม่เริ่ม');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingGame) {
      setTitle(editingGame.title);
      setPlatform(editingGame.platform);
      setEstimatedHours(editingGame.estimatedHours.toString());
      setStatus(editingGame.status);
    } else {
      setTitle('');
      setPlatform('');
      setEstimatedHours('');
      setStatus('ยังไม่เริ่ม');
    }
  }, [editingGame]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !platform.trim() || !estimatedHours) {
      setError('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }
    setError('');
    onSubmit({
      title,
      platform,
      estimatedHours: Number(estimatedHours),
      status,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold">{editingGame ? 'แก้ไขข้อมูลเกม' : 'เพิ่มเกมใหม่'}</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      <div>
        <label className="block text-sm font-medium">ชื่อเกม</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="เช่น Roblox"
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">แพลตฟอร์ม</label>
        <input 
          type="text" 
          value={platform} 
          onChange={(e) => setPlatform(e.target.value)}
          placeholder="เช่น PC, Mobile"
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">จำนวนชั่วโมงที่คาดว่าจะเล่น</label>
        <input 
          type="number" 
          value={estimatedHours} 
          onChange={(e) => setEstimatedHours(e.target.value)}
          placeholder="เช่น 15"
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">สถานะ</label>
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value as any)}
          className="w-full border p-2 rounded"
        >
          <option value="ยังไม่เริ่ม">ยังไม่เริ่ม</option>
          <option value="กำลังเล่น">กำลังเล่น</option>
          <option value="เล่นจบแล้ว">เล่นจบแล้ว</option>
        </select>
      </div>

      <div className="flex space-x-2">
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">บันทึก</button>
        <button type="button" onClick={onCancel} className="bg-gray-200 px-4 py-2 rounded">ยกเลิก</button>
      </div>
    </form>
  );
}