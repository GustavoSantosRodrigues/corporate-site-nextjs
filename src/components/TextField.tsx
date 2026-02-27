"use client";

import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  as?: "input" | "textarea";
  rows?: number;
  error?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoCapitalize?: string;
  className?: string;
};

export default function TextField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  as = "input",
  rows = 4,
  error,
  inputMode,
  autoCapitalize,
  className = "",
}: Props<T>) {
  const fieldBase =
    "mt-1 w-full rounded border border-black/20 px-3 py-2 outline-none transition focus:border-purple-500";
  const fieldError = "border-red-500 focus:border-red-500";

  return (
    <div className={className}>
      <label className="text-sm text-black/80">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          as === "textarea" ? (
            <textarea
              {...field}
              placeholder={placeholder}
              rows={rows}
              className={`${fieldBase} ${error ? fieldError : ""}`}
              aria-invalid={!!error}
            />
          ) : (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`${fieldBase} ${error ? fieldError : ""}`}
              aria-invalid={!!error}
              inputMode={inputMode}
              autoCapitalize={autoCapitalize}
            />
          )
        }
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}