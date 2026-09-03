import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body className="bg-white text-gray-800">
        <div className="border-b px-12 py-4 flex justify-between items-center">
          <div className="text-xl font-medium">STUDENT COURSE HUBมหาวิทยาลัยของเรา</div>
          <div className="space-x-8 text-sm">
            <Link href="/" className="hover:underline">หน้าแรก</Link>
            <Link href="/courses" className="hover:underline">รายวิชา</Link>
            <Link href="/bands" className="hover:underline">วงดนตรี</Link>
            <Link href="/about" className="hover:underline">เกี่ยวกับ</Link>
          </div>
        </div>

        <main className="p-12">
          {children}
        </main>
      </body>
    </html>
  )
}