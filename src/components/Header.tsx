import Button from "./Button";
import { useAppStore } from "../store/useAppStore";

type HeaderProps = {
  onOpenModal: () => void;
};

export default function Header({ onOpenModal }: HeaderProps) {
  const currentRole = useAppStore((state) => state.role);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 w-full h-16 shadow-2xs bg-slate-50 flex justify-between items-center px-6">
      <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
        <div className="font-[impact] text-2xl text-center text-blue-500 hover:text-blue-600 cursor-default tracking-wide">
          Mini Request System
        </div>

        <div className="flex items-center gap-6">
          <span className="font-normal text-slate-700">
            Current role:{" "}
            <span className="font-semibold text-slate-900 capitalize">
              {currentRole}
            </span>
          </span>
          <Button variant="secondary" onClick={onOpenModal}>
            Switch Role
          </Button>
        </div>
      </div>
    </header>
  );
}
