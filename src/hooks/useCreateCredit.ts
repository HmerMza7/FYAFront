import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCredit } from "../services/credit.service";

export const useCreateCredit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCredit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["credits"] });
    },
  });
};