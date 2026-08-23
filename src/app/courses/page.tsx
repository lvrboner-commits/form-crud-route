export default function CoursesPage() {
  type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    instructor: string;
  };

  const allCourses: Course[] = [
    { id: 1, code: "10301231", title: "Web Technology", credits: 3, instructor: "Dr. Somchai" },
    { id: 2, code: "10301232", title: "Database Systems", credits: 3, instructor: "Dr. Somying" },
    { id: 3, code: "10301233", title: "Data Structures and Algorithms", credits: 3, instructor: "Aj. Prasert" },
    { id: 4, code: "10301234", title: "Software Engineering", credits: 3, instructor: "Dr. Narong" },
  ];

  return (
    <main className="page">
      <h1>รายวิชาทั้งหมด</h1>
      <p>รายการรายวิชาในหลักสูตรเทคโนโลยีสารสนเทศและความเร้าใจทางดิจิทัล</p>

      <div className="courseGrid">
        {allCourses.map((course) => (
          <article key={course.id} className="courseCard">
            <h2>{course.title}</h2>
            <p><strong>รหัสวิชา:</strong> {course.code}</p>
            <p><strong>หน่วยกิต:</strong> {course.credits}</p>
            <p><strong>ผู้สอน:</strong> {course.instructor}</p>
          </article>
        ))}
      </div>
    </main>
  );
}