import { IconType } from "react-icons";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  Icon: IconType;
  type: "text" | "textarea";
  button?: boolean;
  select?: boolean;
}

export default function BoothInput({
  label,
  placeholder,
  type,
  value,
  setValue,
  Icon,
  button,
  select,
}: Props) {
  return (
    <div className="flex flex-col w-1/2">
      <div className="flex gap-2 items-center h-full">
        <Icon size={25} color="#0064FF" />
        <label htmlFor={label} className="font-bold">
          {label}{" "}
        </label>
      </div>
      <div className="flex gap-2 items-center h-full">
        {type === "text" ? (
          <input
            placeholder={placeholder}
            type={type}
            value={value}
            className={`h-10 border-b-2 pl-1 mb-5  ${
              button || select ? "w-3/4" : "w-full"
            }`}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <textarea
            placeholder={placeholder}
            value={value}
            className={`h-20 border-b-2 border-r-2 pl-1 pt-1 mb-5 ${
              button || select ? "w-3/4" : "w-full"
            }`}
          />
        )}
        {button ? (
          <button className="h-8 w-1/4 hover:cursor-pointer bg-[#0064FF] rounded-md text-white  mb-4">
            선택
          </button>
        ) : null}
        {select ? (
          <select className="h-10 w-1/4">
            <option value={"카카오뱅크"}>카카오뱅크</option>
            <option value={"신한은행"}>신한은행</option>
            <option value={"우리은행"}>우리은행</option>
            <option value={"국민은행"}>국민은행</option>
          </select>
        ) : null}
      </div>
    </div>
  );
}
