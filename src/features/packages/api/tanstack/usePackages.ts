import { useQuery } from "@tanstack/react-query";

import { PACKAGES_ENDPOINT } from "@/libs/axios";
import { getPackages } from "../axios/getPackages";

export const usePackages = () => {
  return useQuery({
    queryKey: [PACKAGES_ENDPOINT],
    queryFn: getPackages,
  });
};
