"use client";

import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

type Variant = "default" | "gray";

type Props<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  error?: string;
  variant?: Variant;
};

const maskBRPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  const ddd = digits.slice(0, 2);
  const rest = digits.slice(2);

  if (!digits) return "";

  //ate 10 digitos: (11) 1234-5678
  if (digits.length <= 10) {
    const p1 = rest.slice(0, 4);
    const p2 = rest.slice(4, 8);

    if (digits.length < 2) return `(${ddd}`;
    if (!rest) return `(${ddd})`;
    if (rest.length <= 4) return `(${ddd}) ${p1}`;
    return `(${ddd}) ${p1}-${p2}`;
  }

  //11 digitos: (11) 91234-5678
  const p1 = rest.slice(0, 5);
  const p2 = rest.slice(5, 9);

  if (!rest) return `(${ddd})`;
  if (rest.length <= 5) return `(${ddd}) ${p1}`;
  return `(${ddd}) ${p1}-${p2}`;
};

export default function PhoneField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = "(11) 99999-9999",
  error,
  variant = "gray",
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
        render={({ field }) => (
          <input
            {...field}
            type="tel"
            inputMode="tel"
            placeholder={placeholder}
            className={`${base} ${error ? fieldError : ""}`}
            aria-invalid={!!error}
            onChange={(e) => field.onChange(maskBRPhone(e.target.value))}
          />
        )}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}