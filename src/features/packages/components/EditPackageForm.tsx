import { useNavigate } from "react-router";
import { useUpdatePackage } from "../api/tanstack/useUpdatepackage";

import { PackageForm } from "./PackageForm";
import { PackageFormType } from "../types/packageFormType";
import { PackageModel } from "../types/packageModel";

interface Props {
  packageId: number;
  fitPackage: PackageModel;
}

export const EditPackageForm = ({ packageId, fitPackage }: Props) => {
  const navigate = useNavigate();
  const { mutateAsync } = useUpdatePackage();

  const onSubmit = async (formValues: PackageFormType) => {
    await mutateAsync({
      packageId,
      fitPackage: formValues,
    });

    navigate("..");
  };

  return <PackageForm onSubmit={onSubmit} initialValues={fitPackage} />;
};
