import { PACKAGES_ENDPOINT, apiV1 } from "@/libs/axios";
import { PackageModel } from "../../types/packageModel";

type Props = {
  packageId: number;
  signal: AbortSignal;
};

export const getPackage = async ({ packageId, signal }: Props) => {
  const URL = `${PACKAGES_ENDPOINT}/${packageId}`;
  const response = await apiV1.get<PackageModel>(URL, { signal });
  return response.data;
};
