import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <p>
          <span className="text-2xl font-bold">Random</span>
          <span className="text-2xl font-bold text-primary">Recipe</span>
        </p>
        <div className="flex flex-1 items-center justify-end space-x-4 ">
          <nav className="flex items-center space-x-1">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};
