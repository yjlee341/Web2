import { useSearchParams } from "react-router-dom";

interface MENU {
  [key: string]: {
    menu: string;
    view: React.ReactElement;
  };
}

const MENUS: MENU = {
  profile: {
    menu: "프로필",
    view: <div>프로필</div>,
  },
  bookmark: {
    menu: "북마크",
    view: <div>북마크</div>,
  },
  purchase: {
    menu: "구매 내역 확인",
    view: <div>구매 내역 확인</div>,
  },
  myevent: {
    menu: "내 행사 리스트",
    view: <div>내 행사 리스트</div>,
  },
  mybooth: {
    menu: "내 부스 리스트",
    view: <div>내 부스 리스트</div>,
  },
};

export default function MyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSideMenu = searchParams.get("side") ?? Object.keys(MENUS)[0];

  const onClickSideBar = (sidebar: string) => {
    searchParams.set("side", sidebar);
    setSearchParams(searchParams);
  };

  return (
    <section className="flex flex-col w-full h-full p-2">
      <h2 className="border-b text-2xl font-bold p-2">마이페이지</h2>
      <div className="flex">
        <div className="flex flex-col gap-2 w-60 border-r">
          {Object.keys(MENUS).map((sidebar) => (
            <button onClick={() => onClickSideBar(sidebar)}>
              {MENUS[sidebar].menu}
            </button>
          ))}
        </div>
        <div>{MENUS[currentSideMenu].view}</div>
      </div>
    </section>
  );
}
