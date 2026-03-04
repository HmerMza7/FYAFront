import { useQuery } from "@tanstack/react-query";
import { getCredits } from "../services/credit.service";
import { type CreditsResponse, type GetCreditsParams } from "../types/credit.types";


export const useCredits = ({
  search,
  sort,
  order,
  page,
  limit = 10,
}: GetCreditsParams) => {
  return useQuery<CreditsResponse>({
    queryKey: ["credits", search, sort, order, page],
    queryFn: () =>
      getCredits({
        search,
        sort,
        order,
        page,
        limit,
      }),
  
  });
};