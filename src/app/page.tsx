export default function Home() {
  return (
    <div>
      {/* หัวข้อหลัก */}
      <h1 className="text-3xl font-bold text-emerald-900 border-b-2 border-emerald-900 pb-2 mb-6">
        รายวิชาแนะนำประจำภาคเรียน
      </h1>

      {/* รายละเอียดด้านบน */}
      <div className="space-y-1 mb-8 text-sm">
        <p>จำนวนรายวิชาทั้งหมด: 4 วิชา</p>
        <p>สถานะระบบ: เปิดใช้งานปกติ</p>
        <div className="pt-2">
          <p className="font-semibold text-emerald-900">เทคโนโลยีหลักที่ศึกษา:</p>
          <ul className="list-disc list-inside pl-2 space-y-0.5 text-gray-700">
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>

      {/* การ์ดรายวิชาทั้ง 4 */}
      <div className="grid grid-cols-4 gap-6">
        {/* วิชาที่ 1 */}
        <div className="border border-gray-300 rounded-lg p-5 shadow-sm bg-white">
          <h3 className="font-bold text-lg mb-3">1. Web Technology</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p>รหัสวิชา: 10301231</p>
            <p>หน่วยกิต: 3 หน่วยกิต</p>
            <p className="flex items-center gap-2">
              สถานะ: <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> เปิดลงทะเบียน
            </p>
          </div>
        </div>

        {/* วิชาที่ 2 */}
        <div className="border border-gray-300 rounded-lg p-5 shadow-sm bg-white">
          <h3 className="font-bold text-lg mb-3">2. Database Systems</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p>รหัสวิชา: 10301232</p>
            <p>หน่วยกิต: 3 หน่วยกิต</p>
            <p className="flex items-center gap-2">
              สถานะ: <span className="inline-block w-2.5 h-2.5 bg-rose-500 rounded-full"></span> ปิดลงทะเบียน
            </p>
          </div>
        </div>

        {/* วิชาที่ 3 */}
        <div className="border border-gray-300 rounded-lg p-5 shadow-sm bg-white">
          <h3 className="font-bold text-lg mb-3">3. Data Structures and Algorithms</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p>รหัสวิชา: 10301233</p>
            <p>หน่วยกิต: 3 หน่วยกิต</p>
            <p className="flex items-center gap-2">
              สถานะ: <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> เปิดลงทะเบียน
            </p>
          </div>
        </div>

        {/* วิชาที่ 4 */}
        <div className="border border-gray-300 rounded-lg p-5 shadow-sm bg-white">
          <h3 className="font-bold text-lg mb-3">4. Software Engineering</h3>
          <div className="space-y-1 text-sm text-gray-700">
            <p>รหัสวิชา: 10301234</p>
            <p>หน่วยกิต: 3 หน่วยกิต</p>
            <p className="flex items-center gap-2">
              สถานะ: <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full"></span> เปิดลงทะเบียน
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}