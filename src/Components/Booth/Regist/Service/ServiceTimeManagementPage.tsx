import ServiceTimeInfo from "./ServiceTimeInfo";
import ServiceTimeInfoAdd from "./ServiceTimeInfoAdd";

export default function ServiceTimeManagementPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="flex flex-col min-h-full w-4/5 shadow-lg justify-center items-center m-5 p-3">
        <div className="font-bold text-3xl mb-5">서비스 시간대 설정</div>
        <div className="flex justify-center gap-4 text-white">
          <ServiceTimeInfo />
          <ServiceTimeInfo />
          <ServiceTimeInfo />
          <ServiceTimeInfo />
          <ServiceTimeInfo />
          <ServiceTimeInfoAdd />
        </div>
        <div className="flex w-1/3 justify-center gap-4">
          <button className="mt-5 font-bold w-1/3 h-10 hover:cursor-pointer bg-red-600 rounded-md text-white">
            이전
          </button>
          <button className="mt-5 font-bold w-1/3 h-10 hover:cursor-pointer bg-[#0064FF] rounded-md text-white">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
