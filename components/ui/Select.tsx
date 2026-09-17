import { fieldClass, labelClass } from "@/components/ui/Input";

type Props = {
  id: string;
  label: string;
  required?: boolean;
  options: string[];
};

export function Select({ id, label, required, options }: Props) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required ? <span className="text-cta"> *</span> : null}
      </span>
      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        className={`${fieldClass} appearance-none bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-9`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%2366717d' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
