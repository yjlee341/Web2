interface Props {
  placeholder: string;
  required?: boolean;
}
export default function EventFormInput({
  placeholder,
  required = false,
}: Props) {
  return (
    <div className="flex gap-2 w-full">
      <img alt="icon" src="../../logo.svg" />
      <input
        className="border rounded-md flex-1"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
