import tempBanner from "../../logo.svg";

export type Booth = {
  images: string[];
  title: string;
  id: string;
};

export type event = {};

interface Props {
  title: string;
  eventList: Array<Booth | Event>;
}
export default function ShowEventList({ eventList, title }: Props) {
  return (
    <div className="w-full p-10">
      <div className="bg-blue-400 rounded-t-md h-14 font-semibold text-2xl text-white flex items-center justify-center">
        {title}
      </div>
      <img src={tempBanner} alt={title} className="bg-slate-200"></img>
    </div>
  );
}
