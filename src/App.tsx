import Header from "./components/Header";
import SelectRoleModal from "./features/roles/SelectRoleModal/SelectRoleModal";
import { useState } from "react";
import { useAppStore } from "./store/useAppStore";
import RequestList from "./features/requests/RequestList/RequestList";
import Button from "./components/Button";
import RequestModal from "./features/requests/RequestModal/RequestModal";

function App() {
  const { role, requests } = useAppStore();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [editRequestId, setEditRequestId] = useState<string | null>(null);

  return (
    <main className="max-w-6xl my-6 flex flex-col gap-24 mx-auto">
      <Header onOpenModal={() => setIsUserModalOpen(true)} />

      <div className="flex flex-col items-center justify-center gap-10">
        {role === "user" && (
          <Button onClick={() => setIsRequestModalOpen(true)}>
            Create Request
          </Button>
        )}
        {requests.length > 0 ? (
          <RequestList onEditRequest={(id) => setEditRequestId(id)} />
        ) : (
          <h1 className="text-center">There are no requests yet.</h1>
        )}
      </div>

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
    </main>
  );
}

export default App;
