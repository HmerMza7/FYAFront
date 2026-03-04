import { useState } from "react";
import { type Credit } from "../types/credit.types";
import CreditsFilters from "../components/CreditsFilters";
import CreditsTable from "../components/CreditsTable";
import Pagination from "../components/Pagination";
import { useCredits } from "../hooks/useCredits";

const CreditList = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"amount" | "created_at">("created_at");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [page, setPage] = useState(1);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleSortChange = (value: "amount" | "created_at") => {
    setSort(value);
    setPage(1);
  };

  const handleOrderChange = (value: "asc" | "desc") => {
    setOrder(value);
    setPage(1);
  };
  const { data, isError } = useCredits({
    search: search || undefined,
    sort,
    order,
    page,
  });

  if (isError) return <p className="text-red-500">Error cargando créditos</p>;

  const creditsArray = Array.isArray(data) ? data : data?.data || [];
  const credits: Credit[] = creditsArray;
  console.log("creditos", data);

  return (
    <div className="bg-slate-900 p-8 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-6">Lista de Créditos</h1>
      <CreditsFilters
        search={search}
        sort={sort}
        order={order}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
        onOrderChange={handleOrderChange}
      />

      {credits.length === 0 ? (
        <p className="text-slate-400 mt-6">No hay créditos registrados.</p>
      ) : (
        <>
          <CreditsTable credits={credits} />
          <Pagination
            page={page}
            totalPages={data?.totalPages || 1}
            onPrev={() => setPage((prev) => prev - 1)}
            onNext={() => setPage((prev) => prev + 1)}
          />
        </>
      )}
    </div>
  );
};

export default CreditList;
