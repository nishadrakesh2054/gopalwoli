import { Button } from "@/components/ui/Button";

export function FormSuccess({
  title,
  body,
  resetLabel,
  onReset,
}: {
  title: string;
  body: string;
  resetLabel: string;
  onReset: () => void;
}) {
  return (
    <div>
      <p className="text-[22px] font-bold tracking-tight text-ink">{title}</p>
      <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-body">{body}</p>
      <p className="mt-3 text-[13px] text-muted">
        Live email delivery will be connected before launch.
      </p>
      <Button type="button" size="sm" variant="outline" className="mt-6" onClick={onReset}>
        {resetLabel}
      </Button>
    </div>
  );
}
