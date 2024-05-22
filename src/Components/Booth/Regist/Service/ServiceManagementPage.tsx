import ServiceInfoCard from "./ServiceInfoCard";
import ServiceInfoCardAdd from "./ServiceInfoCardAdd";

export default function ServiceManagementPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="flex flex-col w-4/5 shadow-lg justify-center items-center m-5 p-3">
        <div className="font-bold text-3xl mb-5">부스 서비스 관리</div>
        <div className="grid place-items-center grid-cols-5 gap-4">
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCardAdd />
          <ServiceInfoCard />
          <ServiceInfoCard />
          <ServiceInfoCardAdd />
        </div>
        <button className="mt-5 font-bold w-1/3 h-10 hover:cursor-pointer bg-[#0064FF] rounded-md text-white">
          확인
        </button>
      </div>
    </div>
  );
}
