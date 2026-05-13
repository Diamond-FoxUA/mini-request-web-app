import Header from "./components/Header";
import SelectRoleModal from "./features/roles/SelectRoleModal/SelectRoleModal";
import { useState } from "react";
import { useAppStore } from "./store/useAppStore";
import RequestList from "./features/requests/RequestList";
import Button from "./components/Button";
import RequestModal from "./features/requests/RequestModal";
import type { FilterType } from "./store/types";
import RequestFilters from "./features/requests/RequestFilters";

function App() {
  const { role, requests } = useAppStore();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [editRequestId, setEditRequestId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredRequests = requests.filter((req) => {
    if (activeFilter === "all") return true;
    return req.status === activeFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <Header onOpenModal={() => setIsUserModalOpen(true)} />
        </div>
      </div>

      <main className="max-w-6xl pt-24 pb-12 px-4 mx-auto flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-6">
          {requests.length > 0 && (
            <RequestFilters
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          )}

          {role === "user" && (
            <Button onClick={() => setIsRequestModalOpen(true)}>
              Create Request
            </Button>
          )}
        </div>

        <div>
          {filteredRequests.length > 0 ? (
            <RequestList
              filteredRequests={filteredRequests}
              onEditRequest={(id) => setEditRequestId(id)}
            />
          ) : (
            <h1 className="text-center text-xl text-slate-500 font-medium mt-10">
              There are no requests yet.
            </h1>
          )}
        </div>
      </main>

      {isUserModalOpen && (
        <SelectRoleModal onClose={() => setIsUserModalOpen(false)} />
      )}

      {isRequestModalOpen && (
        <RequestModal onClose={() => setIsRequestModalOpen(false)} />
      )}

      {editRequestId && (
        <RequestModal
          id={editRequestId}
          onClose={() => setEditRequestId(null)}
        />
      )}
    </div>
  );
}

export default App;
