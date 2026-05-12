import Modal from "../../shared/Modal/Modal";
import Button from "../../shared/Button/Button";
import { useAppStore } from "../../store/useAppStore";

type SelectRoleModalProps = {
  onClose: () => void;
};

export default function SelectRoleModal({ onClose }: SelectRoleModalProps) {
  const { setRole } = useAppStore();

  return (
    <Modal onClose={onClose}>
      <>
        <h1 className="text-slate-900 font-semibold text-2xl mb-8">
          Choose your role
        </h1>
        <div className="flex gap-6">
          <Button
            onClick={() => {
              setRole("user");
              onClose();
            }}
          >
            User
          </Button>
          <Button
            onClick={() => {
              setRole("manager");
              onClose();
            }}
          >
            Manager
          </Button>
        </div>
      </>
    </Modal>
  );
}
