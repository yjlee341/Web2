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
    <div className="flex flex-col">
      <label htmlFor={label}>{label} </label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
