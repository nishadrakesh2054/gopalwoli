import { labelClass } from "@/components/ui/Input";

type Props = {
  id: string;
  label: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  optional?: boolean;
};

export function Textarea({ id, label, required, rows = 5, placeholder, optional }: Props) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required ? <span className="text-cta"> *</span> : null}
        {optional ? <span className="font-normal text-muted"> Optional</span> : null}
      </span>
      <textarea
        id={id}
        name={id}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="w-full resize-y rounded-[2px] border border-line bg-white px-3.5 py-3 text-[15px] leading-relaxed text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand"
      />
    </label>
  );
}
