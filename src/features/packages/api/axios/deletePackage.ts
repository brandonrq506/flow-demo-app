import { PACKAGES_ENDPOINT, apiV1 } from "@/libs/axios";

export const deletePackage = async (packageId: number) => {
  const URL = `${PACKAGES_ENDPOINT}/${packageId}`;
  await apiV1.delete(URL);
};
