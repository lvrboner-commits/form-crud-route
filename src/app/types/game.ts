export interface Game {
  id: string | number; // รองรับทั้ง string และ number
  title: string;
  platform: string;
  estimatedHours: number;
  status: 'Backlog' | 'กำลังเล่น' | 'เล่นจบแล้ว' | 'ยังไม่เริ่ม';
}
