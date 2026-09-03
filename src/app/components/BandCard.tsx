import Image from "next/image";
import { Band } from "./types/band";

interface BandCardProps {
  band: Band;
}

export default function BandCard({ band }: BandCardProps) {
  return (
    <div className="bg-[#FFFDF9] border-4 border-[#F3E8E2] rounded-3xl p-6 shadow-xl flex flex-col h-[85vh] max-h-[850px] relative overflow-hidden">
      {/* กรอบรูปด้านบน (ขนาดกำลังดี ไม่กินพื้นที่เกินไป) */}
      <div className="bg-white p-3 pb-4 rounded-2xl shadow-sm border border-[#EFE5DD] mb-4 flex-shrink-0">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#F9F6F0]">
          <Image 
            src={band.image} 
            alt={band.name} 
            fill 
            className="object-cover object-center" 
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-1 text-[#4A403A] tracking-wide flex-shrink-0">{band.name}</h3>
      <p className="text-[#C8A282] text-sm font-medium mb-3 flex-shrink-0">
        {band.genre} (ก่อตั้งปี {band.yearFormed})
      </p>

      {/* ส่วนประวัติวง */}
      {band.description && (
        <p className="text-[#6E635B] text-sm mb-4 bg-white/80 border border-[#F0E6DE] p-3.5 rounded-2xl shadow-sm leading-relaxed flex-shrink-0">
          {band.description}
        </p>
      )}

      {/* ส่วนรายชื่อสมาชิก (ถ้าล้นจะสามารถเลื่อน Scroll ดูได้ในตัวการ์ด ไม่หลุดจอ) */}
      <div className="flex flex-col flex-grow min-h-0">
        <h4 className="font-semibold text-sm mb-2 text-[#5A4F47] tracking-wider uppercase text-xs flex-shrink-0">สมาชิกวง</h4>
        <ul className="space-y-2.5 overflow-y-auto pr-1 flex-grow">
          {band.members.map((member) => (
            <li key={member.id} className="flex items-center gap-3 bg-white/60 p-2 rounded-2xl border border-[#F2ECE6] shadow-2xs flex-shrink-0">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 shadow-inner border-2 border-white">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-center" 
                />
              </div>
              <div className="flex flex-col flex-grow min-w-0">
                <span className="font-semibold text-[#4A403A] text-sm truncate">{member.name}</span>
                <span className="text-[#B08968] text-xs font-medium truncate">{member.role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}