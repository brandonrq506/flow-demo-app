import {
  CheckboxProps,
  Field,
  Checkbox as HeadlessCheckbox,
  Label,
} from "@headlessui/react";
import clsx from "clsx";

type Props = CheckboxProps & {
  className?: string;
  inputClassName?: string;
  label: string;
  hideLabel?: boolean;
  showAsterisk?: boolean;
};

export const StateCheckbox = ({
  className,
  label,
  hideLabel = false,
  showAsterisk = false,
  ...props
}: Props) => {
  return (
    <Field className={clsx("flex items-center gap-2", className)}>
      <HeadlessCheckbox
        {...props}
        className="group block size-4 rounded border border-gray-300 bg-white data-checked:border-indigo-600 data-checked:bg-indigo-600 data-disabled:cursor-not-allowed data-disabled:border-gray-300 data-disabled:bg-gray-100 data-disabled:checked:bg-gray-100">
        <svg
          className="stroke-white opacity-0 group-data-checked:opacity-100"
          viewBox="0 0 14 14"
          fill="none">
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HeadlessCheckbox>

      <Label
        className={clsx(
          "block text-sm leading-6 font-medium text-gray-900",
          hideLabel && "sr-only",
        )}>
        {label} {showAsterisk && <span className="ml-1 text-red-700">*</span>}
      </Label>
    </Field>
  );
};
