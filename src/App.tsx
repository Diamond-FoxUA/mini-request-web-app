import Header from "./widgets/Header";
import SelectRoleModal from "./components/SelectRoleModal/SelectRoleModal";
import { useState } from "react";
import { useAppStore } from "./store/useAppStore";
import RequestList from "./components/RequestList/RequestList";
import Button from "./components/shared/Button/Button";
import CreateRequestModal from "./components/CreateRequestModal/CreateRequestModal";

function App() {
  const { role, requests } = useAppStore();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <main className="max-w-6xl my-6 flex flex-col gap-24 mx-auto">
      <Header onOpenModal={() => setIsUserModalOpen(true)} />

      <div className="flex flex-col items-center justify-center gap-10">
        {role === "user" && (
          <Button onClick={() => setIsCreateModalOpen(true)}>
            Create Request
          </Button>
        )}
        {requests.length > 0 ? (
          <RequestList />
        ) : (
          <h1 className="text-center">There are no requests yet.</h1>
        )}
      </div>

      {isUserModalOpen && (
        <SelectRoleModal onClose={() => setIsUserModalOpen(false)} />
      )}
      {isCreateModalOpen && (
        <CreateRequestModal onClose={() => setIsCreateModalOpen(false)} />
      )}
    </main>
  );
}

export default App;
