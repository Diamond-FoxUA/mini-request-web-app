import Button from "../shared/Button/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center ">
      <span className="font-[impact] text-2xl text-center text-blue-500 hover:text-blue-600 cursor-default">Mini Request System</span>
      <Button>Switch Role</Button>
    </header>
  );
}
