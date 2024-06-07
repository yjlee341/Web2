import { MdAnnouncement } from "react-icons/md";
import { BsBasketFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import ProductInfo from "./ProductInfo";
import ServiceInfo from "./ServiceInfo";
import Tag from "./Tag";
import NoticeEvent from "./NoticeEvent";
import Location from "./Location";
import Time from "./Time";
import { useGetBoothDetail } from "../../../Hooks/useGetBoothDetail";

interface Props {
  eventId: number;
}

export default function BoothDetailPage() {
  const { isError, data, isLoading } = useGetBoothDetail(3);

  if (isLoading) return <div>로딩중입니다...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <div className="max-w-screen flex justify-center text-xl">
      {data ? (
        <div className="shadow-md w-2/3 flex flex-col items-center my-10 pb-5">
          <div className="w-2/3 flex flex-col mt-10 items-center gap-4">
            <div className="text-3xl font-bold my-5">{data.name}</div>
            <div className="flex w-full justify-center gap-5">
              <img
                className="w-1/3"
                src={data.mainImageUrl}
                alt="부스 이미지"
              />
              <div className="flex flex-col w-2/3">
                <div className="flex flex-col h-1/2 gap-3 mt-2">
                  <div>
                    <div className="flex gap-2">
                      <div className="font-bold">부스위치 : </div>
                      <div className="flex gap-2">
                        {data.location.map((loc, index) => (
                          <Location
                            key={index}
                            text={`${loc.classification} ${loc.number}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="font-bold">부스 운영시간 : </div>
                    <div className="flex gap-2">
                      <Time text={data.openTime} />
                      <span> ~ </span>
                      <Time text={data.closeTime} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="font-bold">부스 태그 : </div>
                    <div className="flex gap-3">
                      <Tag text="로맨스" />
                      <Tag text="액션" />
                      <Tag text="공포" />
                    </div>
                  </div>
                </div>
                <div className="h-1/2 flex flex-col gap-2 ">
                  <div className="font-bold">부스 설명</div>
                  <div>{data.description}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
              <div className="flex gap-1 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <MdAnnouncement size={25} color="#0064FF" />
                  <div className="font-bold">공지사항/이벤트</div>
                </div>
                <button className="ml-auto bg-[#0064FF] text-white rounded-md px-2 ">
                  모두 보기
                </button>
              </div>
              <div className="w-full flex flex-col gap-4 shadow-md px-4 py-6 rounded-md">
                <NoticeEvent text="이벤트 1" type="event" />
                <NoticeEvent text="공지사항 1" type="notice" />
                <NoticeEvent text="공지사항 2" type="notice" />
              </div>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
              <div className="flex gap-2 items-center w-full">
                <BsBasketFill size={25} color="#0064FF" />
                <div className="font-bold">판매 상품</div>
                <button className="ml-auto bg-[#0064FF] text-white rounded-md px-2 ">
                  모두 보기
                </button>
              </div>
              <div className="w-full flex flex-col gap-2">
                <ProductInfo />
                <ProductInfo />
                <ProductInfo />
              </div>
            </div>

            <div className="flex flex-col items-start w-full gap-2">
              <div className="flex gap-2 items-center w-full">
                <FaClock size={25} color="#0064FF" />
                <div className="font-bold">서비스 예약</div>
                <button className="ml-auto bg-[#0064FF] text-white rounded-md px-2 ">
                  모두 보기
                </button>
              </div>
              <div className="w-full flex flex-col gap-2">
                <ServiceInfo />
                <ServiceInfo />
                <ServiceInfo />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

//TODO: 서비스 시간 설정 1
//TODO: 부스 위치 선택 1
//TODO: 모달 연결 및 Props 설정 2
//TODO: 수정 기능 1
//TODO: 부스 신청 버튼에 데이터 담아서 보내기 2
//TODO: 이미지 미리보기 1
//TODO: 유효성 검사 2
