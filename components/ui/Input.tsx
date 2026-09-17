type Props = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
};

export const fieldClass =
  "w-full h-11 rounded-[2px] border border-line bg-white px-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand";

export const labelClass = "mb-1.5 block text-[13px] font-semibold text-ink";

export function Input({ id, label, type = "text", required, placeholder, autoComplete }: Props) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required ? <span className="text-cta"> *</span> : null}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </label>
  );
}
