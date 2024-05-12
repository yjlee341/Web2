import EventFormInput from "./EventFormInput";

export default function AddEventPage() {
  return (
    <section className="flex min-h-screen justify-center">
      <div className="w-full max-w-screen-lg border h-full p-10">
        <h2>행사 등록</h2>
        <div className="flex flex-col mt-5">
          <span className="bg-blue-400 w-fit p-1 rounded-t">
            행사 정보 입력
          </span>
          <div className="w-full border border-blue-400 p-10 flex flex-col gap-5">
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <span className="bg-blue-400 w-fit p-1 rounded-t">
            행사 배치도 입력
          </span>
          <div className="w-full border border-blue-400 p-10 flex flex-col gap-5">
            <EventFormInput placeholder="" />

            <label>
              <input
                type="radio"
                value={"alpha"}
                name={"type"}
                defaultChecked={true}
              />
              알파벳 형
            </label>

            <label>
              <input
                type="radio"
                value={"alpha"}
                name={"type"}
                defaultChecked={false}
              />
              숫자 형
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
