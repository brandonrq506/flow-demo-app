import { useCreatePackage } from "../api/tanstack/useCreatePackage";
import { useNavigate } from "react-router";

import { PackageForm } from "./PackageForm";
import type { PackageFormType } from "../types/packageFormType";

export const NewPackageForm = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useCreatePackage();

  const onSubmit = async (form: PackageFormType) => {
    await mutateAsync(form);
    navigate("..");
  };

  return <PackageForm onSubmit={onSubmit} />;
};
