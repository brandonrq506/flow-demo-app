import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PACKAGES_ENDPOINT } from "@/libs/axios";
import { createPackage } from "../axios/createPackage";

export const useCreatePackage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PACKAGES_ENDPOINT] });
    },
  });
};
