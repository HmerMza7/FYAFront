interface Props {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

const Pagination = ({ page, totalPages, onPrev, onNext }: Props) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        disabled={page === 1}
        onClick={() => onPrev()}
        className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-50"
      >
        Anterior
      </button>

      <span className="text-white">
        Página {page} de {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => onNext()}
        className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
