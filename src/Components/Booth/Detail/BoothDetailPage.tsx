import { MdAnnouncement } from "react-icons/md";
import { BsBasketFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";

export default function BoothDetailPage() {
  return (
    <div className="w-screen flex justify-center text-xl">
      <div className="shadow-md w-2/3 flex flex-col items-center">
        <div className="w-2/3 flex flex-col mt-10 items-center gap-4">
          <div className="text-3xl font-bold my-5">
            부스상세페이지라는이름의 부스
          </div>
          <div className="flex w-full justify-center gap-5">
            <img
              className="w-1/3"
              src="https://via.placeholder.com/96"
              alt="부스 이미지"
            />
            <div className="flex flex-col w-2/3">
              <div className="flex flex-col h-2/3 gap-3 mt-2">
                <div>
                  <div className="flex gap-2">
                    <div className="font-bold">부스위치 : </div>
                    <div>A1, A2, A3</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="font-bold">부스 운영시간 : </div>
                  <div>AM 09 : 00 ~ PM : 06 : 00</div>
                </div>
                <div className="flex gap-2">
                  <div className="font-bold">부스 태그 : </div>
                  <div className="flex gap-3">
                    <div>공포</div>
                    <div>호러</div>
                    <div>액션</div>
                  </div>
                </div>
              </div>
              <div className="h-1/3 flex flex-col gap-2 ">
                <div className="font-bold">부스 설명</div>
                <div>가나다라마바사 아자차카타파하 안녕하세요</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <div className="flex gap-1 items-center justify-between w-full">
              <div className="flex items-center gap-1">
                <MdAnnouncement size={25} color="#0064FF" />
                <div className="font-bold">공지사항/이벤트</div>
              </div>
              <button className="ml-auto bg-[#0064FF] text-white rounded-md px-2 ">
                모두 보기
              </button>
            </div>
            <div className="w-full flex flex-col gap-2 border-[#0064FF] border-2 px-4 py-6 rounded-md">
              <div className="border-b-gray-200 border-b-2">
                가나다라 이벤트!
              </div>
              <div className="border-b-gray-200 border-b-2">공지사항 1</div>
              <div className="border-b-gray-200 border-b-2">공지사항 2</div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <div className="flex gap-1 items-center">
              <BsBasketFill size={25} color="#0064FF" />
              <div className="font-bold">판매 상품</div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="border-b-blue-400 border-b-2">
                가나다라 이벤트!
              </div>
              <div className="border-b-blue-400 border-b-2">공지사항 1</div>
              <div className="border-b-blue-400 border-b-2">공지사항 2</div>
            </div>
          </div>

          <div className="flex flex-col items-start w-full gap-2">
            <div className="flex gap-1 items-center">
              <FaClock size={25} color="#0064FF" />
              <div className="font-bold">서비스 예약</div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="border-b-blue-400 border-b-2">
                가나다라 이벤트!
              </div>
              <div className="border-b-blue-400 border-b-2">공지사항 1</div>
              <div className="border-b-blue-400 border-b-2">공지사항 2</div>
            </div>
          </div>
        </div>
      </div>
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
