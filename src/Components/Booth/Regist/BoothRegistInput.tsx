import { IconType } from "react-icons";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  Icon: IconType;
  type: "button" | "select" | "text";
  textarea?: boolean;
}

export default function BoothRegistInput({
  label,
  placeholder,
  type,
  value,
  setValue,
  Icon,
  textarea,
}: Props) {
  const INPUT_CLASSNAME = `h-10 border-b-2 pl-1 mb-5  ${
    type === "button" || "select" ? "w-3/4" : "w-full"
  }`;

  return (
    <div className="flex flex-col w-1/2">
      <div className="flex gap-2 items-center h-full">
        <Icon size={25} color="#0064FF" />
        <label htmlFor={label} className="font-bold">
          {label}{" "}
        </label>
      </div>
      <div className="flex gap-2 items-center h-full">
        {textarea ? (
          <textarea
            placeholder={placeholder}
            value={value}
            className={INPUT_CLASSNAME}
          />
        ) : (
          <input
            placeholder={placeholder}
            type="text"
            value={value}
            className={INPUT_CLASSNAME}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        {type === "button" && (
          <button className="h-8 w-1/4 hover:cursor-pointer bg-[#0064FF] rounded-md text-white  mb-4">
            선택
          </button>
        )}
        {type === "select" && (
          <select className="h-10 w-1/4 mb-4">
            <option value={"카카오뱅크"}>카카오뱅크</option>
            <option value={"신한은행"}>신한은행</option>
            <option value={"우리은행"}>우리은행</option>
            <option value={"국민은행"}>국민은행</option>
          </select>
        )}
      </div>
    </div>
  );
}
