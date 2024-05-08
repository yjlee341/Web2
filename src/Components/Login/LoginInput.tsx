interface Props {
  label: string;
  placeholder: string;
  value: string;
  type: "text" | "password";
}

export default function LoginInput({ label, placeholder, type, value }: Props) {
  return (
    <div className="flex flex-col h-20 ">
      <label htmlFor={label} className="font-bold">
        {label}{" "}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        className="h-1/2 w-full border-b-2"
      />
    </div>
  );
}
