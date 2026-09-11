"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { catalogue } from "@/content/site";
import { submitDatasheetRequest, type DatasheetState } from "@/app/datasheet/actions";
import { cn } from "@/lib/cn";

const initial: DatasheetState = { ok: false };

export function DatasheetRequest({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group tap-feedback inline-flex items-center gap-3 bg-amber px-6 py-3.5 text-[0.78rem] font-medium tracking-[0.16em] text-paper uppercase transition-colors duration-300 hover:bg-amber-bright hover:text-ink",
          className,
        )}
      >
        <DownloadIcon />
        <span>{catalogue.downloadLabel}</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="m-auto w-[min(100vw-1.5rem,28rem)] rounded-2xl border border-line bg-paper p-0 text-ink shadow-[0_24px_60px_rgba(10,22,40,0.28)] backdrop:bg-ink/55"
        onClose={() => setOpen(false)}
      >
        <div className="border-b border-line px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p id={titleId} className="font-display text-xl tracking-tight">
                Request the catalogue
              </p>
              <p className="mt-1 text-sm text-muted">
                Share your details and we will email the product catalogue to you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="tap-feedback flex h-9 w-9 items-center justify-center rounded-full text-muted hover:bg-cream hover:text-ink"
            >
              ×
            </button>
          </div>
        </div>
        <div className="px-5 py-4">
          <DatasheetForm key={open ? "open" : "closed"} onClose={() => setOpen(false)} />
        </div>
      </dialog>
    </>
  );
}

function DatasheetForm({ onClose }: { onClose: () => void }) {
  const [state, action, pending] = useActionState(submitDatasheetRequest, initial);

  if (state.ok) {
    return (
      <div className="space-y-4 py-2">
        <p className="text-base leading-relaxed text-ink">
          Thank you. Your request is with our team — the product catalogue will be emailed to you shortly.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="tap-feedback w-full rounded-xl bg-ink px-4 py-3 text-[0.78rem] tracking-[0.14em] text-paper uppercase hover:bg-amber"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-3">
      <Field label="Full name" name="name" type="text" autoComplete="name" required />
      <Field label="Organisation" name="organisation" type="text" autoComplete="organization" required />
      <Field label="Mobile / WhatsApp" name="phone" type="tel" autoComplete="tel" required />
      <Field label="Official email" name="email" type="email" autoComplete="email" required />
      <label className="block">
        <span className="text-[0.68rem] tracking-[0.12em] text-muted uppercase">Domain</span>
        <select
          name="domain"
          required
          defaultValue=""
          className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-[0.88rem] text-ink outline-none focus:border-amber"
        >
          <option value="" disabled>
            Select a domain
          </option>
          {catalogue.domains.map((domain) => (
            <option key={domain.id} value={domain.label}>
              {domain.label}
            </option>
          ))}
        </select>
      </label>
      {state.error ? <p className="text-[0.8rem] leading-relaxed text-red-700">{state.error}</p> : null}
      <button
        type="submit"
        disabled={pending}
        className="tap-feedback mt-1 w-full rounded-xl bg-ink px-4 py-3 text-[0.78rem] tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-amber disabled:opacity-70"
      >
        {pending ? "Sending…" : "Request catalogue"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[0.68rem] tracking-[0.12em] text-muted uppercase">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-[0.88rem] text-ink outline-none focus:border-amber"
      />
    </label>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z" />
    </svg>
  );
}
