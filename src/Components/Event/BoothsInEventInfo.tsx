export default function BoothInEventInfo() {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between w-full items-center">
        <span>등록된 부스 : N개 금일 이용 가능 부스 수 : N개</span>
        <button className="bg-blue-500 rounded-md p-2 text-white font-bold">
          부스 목록
        </button>
      </div>
      <img
        src=""
        alt="행사장 배치도"
        className="w-full h-52 border rounded-md"
      />
    </div>
  );
}
