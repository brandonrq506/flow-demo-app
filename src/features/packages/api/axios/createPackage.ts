import { PACKAGES_ENDPOINT, apiV1 } from "@/libs/axios";
import { PackageFormType } from "../../types/packageFormType";
import { PackageModel } from "../../types/packageModel";

export const createPackage = async (packageData: PackageFormType) => {
  const response = await apiV1.post<PackageModel>(
    PACKAGES_ENDPOINT,
    packageData,
  );
  return response.data;
};
