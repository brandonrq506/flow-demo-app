import { useMutation, useQueryClient } from "@tanstack/react-query";

import { PACKAGES_ENDPOINT } from "@/libs/axios";
import { deletePackage } from "../axios/deletePackage";

export const useDeletePackage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PACKAGES_ENDPOINT] });
    },
  });
};
