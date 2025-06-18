import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PACKAGES_ENDPOINT } from "@/libs/axios";
import { updatePackage } from "../axios/updatePackage";

export const useUpdatePackage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PACKAGES_ENDPOINT] });
    },
  });
};
