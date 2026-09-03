import BandCard from "../components/BandCard";
import { bandsData } from "../components/data/ฺbandsData";


export default function BandsPage() {
  return (
    <main style={{ width: "100%", padding: "20px", boxSizing: "border-box" }}>
      <h1 className="text-3xl font-bold mb-6">วงดนตรีที่ชื่นชอบ</h1>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 280px)",
          justifyContent: "center",
          gap: "16px",
          width: "100%",
        }}
      >
        {bandsData.map((band: any) => (
          <BandCard key={band.id} band={band} />
        ))}
      </div>
    </main>
  );
}