import { useQuery } from "@tanstack/react-query";

import { PACKAGES_ENDPOINT } from "@/libs/axios";
import { getPackage } from "../axios/getPackage";

export const usePackage = (packageId: number) => {
  return useQuery({
    queryKey: [PACKAGES_ENDPOINT, packageId],
    queryFn: ({ signal }) => getPackage({ packageId, signal }),
    enabled: Boolean(packageId),
  });
};
