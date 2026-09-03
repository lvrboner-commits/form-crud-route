type Course = {
  id: string;
  title: string;
  code: string;
  credits: number;
  status: "open" | "closed";
};

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Web Technology",
    code: "10301231",
    credits: 3,
    status: "open",
  },
  {
    id: "2",
    title: "Database Systems",
    code: "10301232",
    credits: 3,
    status: "closed",
  },
  {
    id: "3",
    title: "Data Structures and Algorithms",
    code: "10301233",
    credits: 3,
    status: "open",
  },
  {
    id: "4",
    title: "Software Engineering",
    code: "10301234",
    credits: 3,
    status: "open",
  },
];