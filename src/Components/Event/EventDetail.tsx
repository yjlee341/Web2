import { FormEvent } from "react";
import EventFormInput from "./EventFormInput";
import EventReview from "./EventReview";
import EventInfo from "./EventInfo";
import BoothInEventInfo from "./BoothsInEventInfo";
import EventReviewList from "./EventReviewList";

export default function EventDetailPage() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="flex min-h-screen justify-center" onSubmit={onSubmit}>
      <div className="w-full max-w-screen-lg border h-full p-10">
        <h2>행사 등록</h2>
        <div className="flex flex-col mt-5">
          <div className="bg-blue-400 h-5 rounded-t" />
          <div className="w-full border border-blue-400 px-10 py-4 flex flex-col gap-5">
            <button className="ml-auto">행사 관리</button>

            <EventInfo />

            <BoothInEventInfo />

            <EventReviewList />
          </div>
        </div>
      </div>
    </form>
  );
}
