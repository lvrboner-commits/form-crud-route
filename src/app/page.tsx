export default function HomePage() {
  const courseCount: number = 4;
  const isOpen: boolean = true;
  const topics: string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "Next.js",
  ];

  type Course = {
    id: number;
    code: string;
    title: string;
    credits: number;
    isOpen: boolean;
  };

  const courses: Course[] = [
    {
      id: 1,
      code: "10301231",
      title: "Web Technology",
      credits: 3,
      isOpen: true,
    },
    {
      id: 2,
      code: "10301232",
      title: "Database Systems",
      credits: 3,
      isOpen: false,
    },
    {
      id: 3,
      code: "10301233",
      title: "Data Structures and Algorithms",
      credits: 3,
      isOpen: true,
    },
    {
      id: 4,
      code: "10301234",
      title: "Software Engineering",
      credits: 3,
      isOpen: true,
    },
  ];

  return (
    <div>
      {/* แบนเนอร์หัวเว็บไซต์สไตล์มหาวิทยาลัย */}
      <section className="heroBanner">
        <div className="heroContent">
          <h1 className="heroTitle">มหาวิทยาลัยชั้นนำแห่งการสร้างสรรค์</h1>
          <p className="heroSubtitle">ระบบสารสนเทศเพื่อการศึกษาและลงทะเบียนเรียนออนไลน์</p>
          <div className="heroButtons">
            <a href="/courses" className="btnPrimary">ดูรายวิชาทั้งหมด</a>
            <a href="/about" className="btnSecondary">เกี่ยวกับเรา</a>
          </div>
        </div>
      </section>

      {/* เนื้อหาหลักด้านล่าง */}
      <main className="page">
        <h1>รายวิชาแนะนำประจำภาคเรียน</h1>
        <p><strong>จำนวนรายวิชาทั้งหมด:</strong> {courseCount} วิชา</p>
        <p><strong>สถานะระบบ:</strong> {isOpen ? "เปิดใช้งานปกติ" : "ปิดปรับปรุงระบบ"}</p>

        <div style={{ margin: "1.5rem 0" }}>
          <h3 style={{ color: "#00563b", fontWeight: "600" }}>เทคโนโลยีหลักที่ศึกษา:</h3>
          <ul>
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>

        <section className="courseGrid">
          {courses.map((course, index) => (
            <article key={course.id} className="courseCard">
              <h2>{index + 1}. {course.title}</h2>
              <p><strong>รหัสวิชา:</strong> {course.code}</p>
              <p><strong>หน่วยกิต:</strong> {course.credits} หน่วยกิต</p>
              <p><strong>สถานะ:</strong> {course.isOpen ? "🟢 เปิดลงทะเบียน" : "🔴 ปิดลงทะเบียน"}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}