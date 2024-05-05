interface Props {
  label: string;
  placeholder: string;
  value: string;
  type: "text" | "password";
}

export default function LoginInput({ label, placeholder, type, value }: Props) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label} </label>
      <input placeholder={placeholder} type={type} value={value} />
    </div>
  );
}
