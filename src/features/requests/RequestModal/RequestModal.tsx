import Modal from "../../../components/Modal";
import RequestForm from "../RequestForm/RequestForm";

type RequestModalProps = {
  onClose: () => void;
  id?: string;
};

export default function RequestModal({ onClose, id }: RequestModalProps) {
  const isEditMode = Boolean(id);

  return (
    <Modal onClose={onClose}>
      <div className="w-full">
        <h1 className="text-slate-900 font-semibold text-2xl mb-8">
          {isEditMode ? "Edit request form" : "Create request form"}
        </h1>

        <RequestForm id={id} onClose={onClose} />
      </div>
    </Modal>
  );
}
