import Button from "../shared/Button/Button";
import { useAppStore } from "../store/useAppStore";

type HeaderProps = {
  onOpenModal: () => void;
};

export default function Header({ onOpenModal }: HeaderProps) {
  const currentRole = useAppStore((state) => state.role);

  return (
    <header className="flex justify-between items-center ">
      <div className="font-[impact] text-2xl text-center text-blue-500 hover:text-blue-600 cursor-default">
        Mini Request System
      </div>
      <div className="flex items-center gap-6">
        <span className="font-normal ">Current role: <span className="font-semibold">{currentRole}</span></span>
        <Button onClick={onOpenModal}>Switch Role</Button>
      </div>
    </header>
  );
}
