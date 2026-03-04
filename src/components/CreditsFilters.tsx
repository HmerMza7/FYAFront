interface Props {
  search: string;
  sort: "amount" | "created_at";
  order: "asc" | "desc";
  onSearchChange: (value: string) => void;
  onSortChange: (value: "amount" | "created_at") => void;
  onOrderChange: (value: "asc" | "desc") => void;
}

const CreditsFilters = ({
  search,
  sort,
  order,
  onSearchChange,
  onSortChange,
  onOrderChange,
}: Props) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-6">
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="p-3 rounded bg-slate-800 text-white border border-slate-700"
      />

      <select
        value={sort}
        onChange={(e) =>
          onSortChange(e.target.value as "amount" | "created_at")
        }
        className="p-3 rounded bg-slate-800 text-white border border-slate-700"
      >
        <option value="created_at">Fecha</option>
        <option value="amount">Monto</option>
      </select>

      <select
        value={order}
        onChange={(e) => onOrderChange(e.target.value as "asc" | "desc")}
        className="p-3 rounded bg-slate-800 text-white border border-slate-700"
      >
        <option value="desc">Descendente</option>
        <option value="asc">Ascendente</option>
      </select>
    </div>
  );
};

export default CreditsFilters;
