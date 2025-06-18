import { FieldValues, UseControllerProps } from "react-hook-form";
import { ComboBoxType } from "@/components/form/ComboBox/types";
import { ControlComboBox } from "@/components/form";
import { classTypes } from "@/utils";

type ClassComboboxProps = Omit<ComboBoxType, "options" | "label">;

export const ClassCombobox = <T extends FieldValues>({
  description,
  hideLabel,
  showAsterisk,
  ...controllerProps
}: UseControllerProps<T> & ClassComboboxProps) => {
  return (
    <ControlComboBox
      description={description}
      hideLabel={hideLabel}
      label="Class type"
      options={classTypes}
      showAsterisk={showAsterisk}
      {...controllerProps}
    />
  );
};
