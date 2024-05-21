export default function ServiceInfoCard() {
  return (
    <div className="flex flex-col p-3 pb-5 w-full gap-6 items-center rounded-md font-bold shadow-lg">
      <div className="flex p-8 bg-slate-100 rounded-lg justify-center">
        <img
          alt="제품 이미지"
          className="flex w-1/2"
          src="images/logos/logo_small.png"
        />
      </div>
      <div>A 서비스</div>
      <div>가격 : 15000원</div>
      <div className="flex justify-center gap-5 w-full">
        <button className="bg-[rgb(96,165,250)] rounded-md w-full">수정</button>
        <button className="bg-red-600 rounded-md w-full">삭제</button>
      </div>
    </div>
  );
}
