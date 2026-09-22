export type Game = {
  id: string;
  title: string;
  platform: string;
  estimatedHours: number;
  status: 'Backlog' | 'กำลังเล่น' | 'เล่นจบแล้ว' | 'ยังไม่เริ่ม';
};

export const initialGames: Game[] = [
  { id: '1', title: 'Roblox', platform: 'PC', estimatedHours: 15, status: 'กำลังเล่น' },
  { id: '2', title: 'ROV', platform: 'Mobile', estimatedHours: 20, status: 'เล่นจบแล้ว' },
  { id: '3', title: 'PUBG Mobile', platform: 'Mobile', estimatedHours: 10, status: 'กำลังเล่น' },
  { id: '4', title: 'Minecraft', platform: 'PC', estimatedHours: 30, status: 'เล่นจบแล้ว' },
  { id: '5', title: 'Genshin Impact', platform: 'PC / Mobile', estimatedHours: 50, status: 'ยังไม่เริ่ม' },
];