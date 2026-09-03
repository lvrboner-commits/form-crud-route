interface Course {
  title: string;
  code: string;
  credits: number;
  status: "open" | "closed";
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold mb-3">{course.title}</h3>
      <p className="text-gray-600 mb-2">รหัสวิชา: {course.code}</p>
      <p className="text-gray-600 mb-3">หน่วยกิต: {course.credits} หน่วยกิต</p>
      <div className="flex items-center gap-2">
        <span className="text-gray-600">สถานะ:</span>
        <span className="flex items-center gap-1.5 font-medium">
          <span 
            className={`w-2.5 h-2.5 rounded-full ${
              course.status === "open" ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {course.status === "open" ? "เปิดลงทะเบียน" : "ปิดลงทะเบียน"}
        </span>
      </div>
    </div>
  );
}