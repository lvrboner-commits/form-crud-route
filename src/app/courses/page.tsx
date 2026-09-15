
import { coursesData } from "../../data/coursesdata";
import CourseCard from "../components/CourseCard";
import Navbar from "../components/Navbar";

export default function CoursesPage() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">รายวิชาทั้งหมด</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}