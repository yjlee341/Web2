interface Props {
  placeholder: string;
  required?: boolean;
  onChange: (e: any) => void;
  name: string;
  DateInput?: boolean;
}
export default function EventFormInput({
  placeholder,
  required = false,
  onChange,
  name,
  DateInput = false,
}: Props) {
  return (
    <div className="flex gap-2 w-full">
      <img alt="icon" src="../../logo.svg" />
      <input
        className="border rounded-md flex-1 p-1"
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={DateInput ? "date" : "text"}
      />
    </div>
  );
}
