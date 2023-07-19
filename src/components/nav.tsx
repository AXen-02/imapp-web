import { AccountAvatar } from "./acc-avatar";
import { ThemeToggler } from "./theme-toggler";
import { Button } from "./ui/button";
import {
  RxLayout,
  RxHamburgerMenu,
  RxDiscordLogo,
  RxComponentBoolean,
} from "react-icons/rx";

export function Nav() {
  return (
    <div className="container flex h-14 items-center">
      {/* nav left-side */}
      <div className="mr-4 hidden md:flex">
        <a className="mr-6 flex items-center space-x-2" href="/">
          <RxComponentBoolean className="h-8 w-8 animate-spin-slow" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
          </svg> */}
          <span className="hidden font-bold sm:inline-block">imapp</span>
        </a>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/docs"
          >
            Lectures
          </a>
          <a
            className="transition-colors hover:text-foreground/80 text-foreground/60"
            href="/docs/components"
          >
            Troubleshooter
          </a>
        </nav>
      </div>
      {/* minibutton */}
      <button
        className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="radix-:R15hja:"
        data-state="closed"
      >
        <RxHamburgerMenu width="15" height="15" className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </button>
      {/* nav right-side */}
      <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <button className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64">
            <span className="hidden lg:inline-flex">
              Search documentation...
            </span>
            <span className="inline-flex lg:hidden">Search...</span>
            <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
        </div>
        <nav className="flex items-center space-x-2">
          <ThemeToggler />
          {/* <AccountAvatar /> */}
          <Button>LOGIN</Button>
        </nav>
      </div>
    </div>
  );
}
