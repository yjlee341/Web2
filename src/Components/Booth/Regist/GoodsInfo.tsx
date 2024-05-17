export default function GoodsInfo() {
  return (
    <div className="flex flex-col p-3 w-full gap-2 items-center rounded-md font-bold shadow-lg">
      <img
        className="w-1/2 h-full bg-slate-400"
        alt="제품 이미지"
        src="images/boothRegist/plus_symbol.png"
      />
      {/*<img alt="제품 이미지" src="images/logos/logo_small.png" />*/}
      <div>A물품 : 10000원</div>
      <div>재고 : 100개</div>
      <div className="flex justify-center gap-5 w-full">
        <button className="bg-[#0064FF] rounded-md w-full">수정</button>
        <button className="bg-red-700 rounded-md w-full">삭제</button>
      </div>
    </div>
  );
}
