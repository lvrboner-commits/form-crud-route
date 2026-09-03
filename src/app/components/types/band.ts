export interface Member {
  id: string;
  name: string;
  role: string;
  image: string; 
}

export interface Band {
  id: string;
  name: string;
  genre: string;
  yearFormed: number;
  image: string;
  description?: string; // รองรับข้อมูลประวัติวง
  members: Member[];
}