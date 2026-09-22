
import Link from "next/link";

type Game = {
  id: string;
  name: string;
  status: string;
  platform: string;
  hours: number;
};

type GameCardProps = {
  game: Game;
  onEdit: (game: Game) => void;
  onDelete: (id: string) => void;
};

export default function GameCard({ game, onEdit, onDelete }: GameCardProps) {
  return (
    <div className="bg-gray-900 text-white p-5 rounded-xl border border-gray-800 shadow-md flex flex-col justify-between transition hover:border-gray-700">
      {/* ส่วนข้อมูลเกม */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/games/${game.id}`}>
            <h3 className="text-lg font-bold text-white hover:underline cursor-pointer">
              {game.name}
            </h3>
          </Link>
          <span className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-white border border-gray-700">
            {game.status}
          </span>
        </div>

        <div className="space-y-1 text-sm text-white">
          <p className="text-white">
            แพลตฟอร์ม: <span className="font-normal text-white">{game.platform}</span>
          </p>
          <p className="text-white">
            เวลาที่คาดว่าจะเล่น: <span className="font-normal text-white">{game.hours} ชั่วโมง</span>
          </p>
        </div>
      </div>

      {/* ส่วนปุ่มแก้ไขและลบ */}
      <div className="flex items-center gap-2 pt-4 mt-4 border-t border-gray-800">
        <button
          onClick={() => onEdit(game)}
          className="flex-1 px-3 py-1.5 text-sm font-medium bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
        >
          แก้ไข
        </button>
        <button
          onClick={() => onDelete(game.id)}
          className="flex-1 px-3 py-1.5 text-sm font-medium bg-red-950 text-white border border-red-900 rounded-md hover:bg-red-900 transition"
        >
          ลบ
        </button>
      </div>
    </div>
  );
}