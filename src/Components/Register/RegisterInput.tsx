interface Props {
  label: string;
  placeholder: string;
  value: string;
  type: "text" | "password";
  setValue: (value: string) => void;
}

export default function RegisterInput({
  label,
  placeholder,
  type,
  value,
  setValue,
}: Props) {
  return (
    <div className="flex flex-col h-20">
      <label htmlFor={label} className="font-bold">
        {label}{" "}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        className="h-1/2 w-full border-b-2 pl-1"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
