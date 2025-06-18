import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  NumberInput,
  StateCheckbox,
  TextArea,
  TextInput,
} from "@/components/form";
import { Button } from "@/components/core";
import { ClassCombobox } from "./ClassCombobox";
import { PackageFormType } from "../types/packageFormType";
import { SectionHeader } from "@/components/layout";

const formDefaults: PackageFormType = {
  name: "",
  description: "",
  price: 0,
  classType: null,
  availableMonths: 0,
  classesPerPackage: 0,
};

interface Props {
  initialValues?: Partial<PackageFormType>;
  onSubmit: (data: PackageFormType) => void;
}

export const PackageForm = ({ initialValues, onSubmit }: Props) => {
  const { control, formState, handleSubmit, register } =
    useForm<PackageFormType>({
      values: {
        ...formDefaults,
        ...initialValues,
      },
    });
  const { errors, isSubmitting } = formState;
  const [unlimitedMonthsCheck, setUnlimitedMonthsCheck] = useState(false);
  const [unlimitedClassesCheck, setUnlimitedClassesCheck] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <SectionHeader title="Create New Package" />
      <p className="text-sm text-gray-500">
        Fill in the details to createa a new package
      </p>

      <TextInput
        label="Name"
        registration={register("name", { required: "Name is required" })}
        error={errors.name?.message}
      />

      <TextArea
        label="Description"
        registration={register("description", {
          required: "Description is required",
        })}
        error={errors.description?.message}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <NumberInput
          label="Price"
          registration={register("price", { valueAsNumber: true })}
          error={errors.price?.message}
        />

        <ClassCombobox
          control={control}
          name="classType"
          rules={{ required: "The class type is required" }}
        />

        <div className="space-y-6">
          <StateCheckbox
            label="Unlimited months"
            checked={unlimitedMonthsCheck}
            disabled={unlimitedClassesCheck}
            onChange={() => setUnlimitedMonthsCheck((prev) => !prev)}
          />

          {!unlimitedMonthsCheck && (
            <NumberInput
              label="Available Months"
              registration={register("availableMonths", {
                required: true,
                valueAsNumber: true,
                shouldUnregister: true,
              })}
              error={errors.availableMonths?.message}
            />
          )}
        </div>

        <div className="space-y-6">
          <StateCheckbox
            label="Unlimited classes"
            checked={unlimitedClassesCheck}
            disabled={unlimitedMonthsCheck}
            onChange={() => setUnlimitedClassesCheck((prev) => !prev)}
          />

          {!unlimitedClassesCheck && (
            <NumberInput
              label="Classes per package"
              registration={register("classesPerPackage", {
                required: true,
                valueAsNumber: true,
                shouldUnregister: true,
              })}
              error={errors.classesPerPackage?.message}
            />
          )}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
        Save
      </Button>
    </form>
  );
};
