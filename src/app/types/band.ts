export interface Instructor {
  name: string;
  role: string;
  image: string;
}

export interface Course {
  code: any;
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  image: string;
  instructors: Instructor[];
  likes?: number;
  isEnrolled?: boolean;
}