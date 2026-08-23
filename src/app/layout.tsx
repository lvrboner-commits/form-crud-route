import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Course Hub - มหาวิทยาลัย",
  description: "ระบบลงทะเบียนและข้อมูลรายวิชา",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* แถบ Header สีขาวสะอาดตา สไตล์มหาวิทยาลัย */}
        <header className="universityHeader">
          <div className="headerContainer">
            <div className="logoArea">
              <span className="uniNameEn">STUDENT COURSE HUB</span>
              <span className="uniNameTh">มหาวิทยาลัยของเรา</span>
            </div>
            <nav className="navLinks">
              <Link href="/" className="navItem">หน้าแรก</Link>
              <Link href="/courses" className="navItem">รายวิชา</Link>
              <Link href="/about" className="navItem">เกี่ยวกับ</Link>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}