"use client";

import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

type Variant = "default" | "gray";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  as?: "input" | "textarea";
  rows?: number;
  error?: string;
  variant?: Variant;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoCapitalize?: string;
  formatOnChange?: (value: string) => string;
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
  variant = "default",
  inputMode,
  autoCapitalize,
  formatOnChange,
}: Props<T>) {
  const variants = {
    default:
      "mt-1 w-full rounded border border-black/20 px-3 py-2 outline-none transition focus:border-purple-500",

    gray:
      "mt-1 w-full bg-gray-100 rounded-xl p-4 outline-none border-0 focus:ring-2 focus:ring-purplePaths-100",
  };

  const fieldError = "border-red-500 focus:border-red-500";

  const base = variants[variant];

  return (
    <div>
      <label className="block mb-2 font-semibold text-black">{label}</label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const handleChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            const next = formatOnChange
              ? formatOnChange(e.target.value)
              : e.target.value;

            field.onChange(next);
          };

          return as === "textarea" ? (
            <textarea
              {...field}
              onChange={handleChange}
              placeholder={placeholder}
              rows={rows}
              className={`${base} ${error ? fieldError : ""}`}
              aria-invalid={!!error}
            />
          ) : (
            <input
              {...field}
              onChange={handleChange}
              type={type}
              placeholder={placeholder}
              className={`${base} ${error ? fieldError : ""}`}
              aria-invalid={!!error}
              inputMode={inputMode}
              autoCapitalize={autoCapitalize}
            />
          );
        }}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}