import { PACKAGES_ENDPOINT, apiV1 } from "@/libs/axios";
import { PackageModel } from "../../types/packageModel";

type Props = { signal: AbortSignal };

export const getPackages = async ({ signal }: Props) => {
  const response = await apiV1.get<PackageModel[]>(PACKAGES_ENDPOINT, {
    signal,
  });
  return response.data;
};
