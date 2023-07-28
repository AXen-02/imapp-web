"use client";
import Link from "next/link";
import { AccountAvatar } from "./AccountAvatar";
import { ThemeToggler } from "./ThemeToggler";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  RxLayout,
  RxHamburgerMenu,
  RxDiscordLogo,
  RxComponentBoolean,
} from "react-icons/rx";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useToast } from "./ui/use-toast";
import { Icons } from "./Icons";

export function Nav() {
  const { toast } = useToast();

  // to be developed
  const tbd = () => {
    toast({
      title: "To be developed",
      description: "This feature is not yet implemented",
    });
  };

  return (
    <div className="fixed top-0 inset-x-0 h-fit border-b border-x-zinc-300 z-[10]">
      <div className="container flex h-14 items-center   max-w-7xl mx-auto justify-between gap-2">
        {/* nav left-side */}
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Icons.logo className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">imapp</span>
          </Link>
          {/* main nav bar */}
          <nav className={"flex items-center space-x-4 lg:space-x-6"}>
            <Link
              href="/lectures"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Lectures
            </Link>
            <Link
              href="/troubleshooter"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Troubleshooter
            </Link>
          </nav>
        </div>
        {/* minibutton */}
        <Button
          className="inline-flex items-center justify-center rounded-md font-medium  md:hidden"
          variant={"ghost"}
          size={"icon"}
        >
          <RxHamburgerMenu className="h-6 w-6" />
        </Button>
        {/* nav right-side */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* searchbar */}
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              onClick={tbd}
              className="inline-flex items-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
            >
              <span className="hidden lg:inline-flex">
                Search documentation...
              </span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
          {/* theme toggler and login/account */}
          <nav className="flex items-center space-x-2">
            <ThemeToggler />
            {/* <AccountAvatar /> */}
            <Button onClick={tbd}>SIGN IN</Button>
          </nav>
        </div>
      </div>
    </div>
  );
}