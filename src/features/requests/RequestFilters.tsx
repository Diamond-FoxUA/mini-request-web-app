import type { FilterType } from "../../store/types";

type RequestFiltersProps = {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
};

export default function RequestFilters({
  activeFilter,
  setActiveFilter,
}: RequestFiltersProps) {
  const filters: FilterType[] = ["all", "new", "in progress", "done"];

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <h3 className="text-lg font-semibold text-slate-700">Filters</h3>

      <ul className="flex gap-2 justify-center">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              type="button"
              disabled={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize ${
                activeFilter === filter
                  ? "bg-blue-500 text-white disabled:cursor-default"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300 cursor-pointer"
              }`}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
