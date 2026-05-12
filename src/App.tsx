import Header from "./widgets/Header";
import SelectRoleModal from "./features/SelectRoleModal/SelectRoleModal";
import { useState } from "react";
import { useAppStore } from "./store/useAppStore";
import RequestList from "./features/RequestList/RequestList";

function App() {
  const { role } = useAppStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="max-w-6xl my-6 flex flex-col gap-10 mx-auto">
      <Header onOpenModal={() => setIsModalOpen(true)} />

      {isModalOpen && <SelectRoleModal onClose={() => setIsModalOpen(false)} />}

      {role === "user" && (
        <RequestList />
      )}
    </main>
  );
}

export default App;
