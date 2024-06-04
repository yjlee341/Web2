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
      <div className="w-full max-w-screen-lg shadow-2xl h-full p-10">
        <h2 className="text-2xl font-extrabold text-center">행사명</h2>
        <div className="flex flex-col mt-5">
          <div className="w-full px-10 py-4 flex flex-col gap-5">
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
