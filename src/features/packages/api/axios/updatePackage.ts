import { PACKAGES_ENDPOINT, apiV1 } from "@/libs/axios";
import { PackageFormType } from "../../types/packageFormType";
import { PackageModel } from "../../types/packageModel";

type Props = {
  packageId: number;
  fitPackage: Partial<PackageFormType>;
};

export const updatePackage = async ({ packageId, fitPackage }: Props) => {
  const URL = `${PACKAGES_ENDPOINT}/${packageId}`;

  const response = await apiV1.patch<PackageModel>(URL, fitPackage);
  return response.data;
};
