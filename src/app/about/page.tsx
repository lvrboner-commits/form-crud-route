 export default function AboutPage() {
  return (
    <main className="page">
      <h1>เกี่ยวกับเรา</h1>
      <p>เว็บไซต์นี้เป็นระบบสารสนเทศสำหรับนักศึกษาในการตรวจสอบข้อมูลรายวิชาและวางแผนการลงทะเบียนเรียน</p>
      
      <h3 style={{ marginTop: "1.5rem", color: "#b31b1b" }}>วัตถุประสงค์</h3>
      <p>สร้างขึ้นเพื่ออำนวยความสะดวกในการค้นหาข้อมูลหน่วยกิต และสถานะการเปิดลงทะเบียนของรายวิชาต่างๆ ภายในมหาวิทยาลัย</p>

      <h3 style={{ marginTop: "1.5rem", color: "#b31b1b" }}>เทคโนโลยีที่ใช้พัฒนา</h3>
      <ul>
        <li>Next.js (App Router)</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
      </ul>
    </main>
  );
}
 