const EVENT_INFO = "w-full border-b border-blue-300 text-sm";

export default function EventInfo() {
  return (
    <div className="flex gap-7 w-full">
      <img
        src=""
        alt="행사 이미지"
        className="w-1/3 rounded-md object-cover aspect-square border"
      />
      <div className="flex flex-col flex-1 gap-2">
        <div className={EVENT_INFO}>행사 위치: OOO</div>
        <div className={EVENT_INFO}>
          행사 운영 기간: 2020 - 2020 - 022020 ~ 2020
        </div>
        <div className="border border-blue-300 rounded-md h-full p-2 text-sm">
          행사 설명
        </div>
      </div>
    </div>
  );
}
