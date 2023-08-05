import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { RxPlusCircled } from "react-icons/rx";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {/* MENU */}
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Read Now
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Browse
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icons.bookPlus className="mr-2 h-4 w-4" />
              New tutorial
            </Button>
          </div>
        </div>
        {/* USER TUTORIALS */}
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            My Tutorials
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1">
              {/* Map user tutorials here */}
              <Button
                // key={`${playlist}-${i}`}
                variant="ghost"
                className="w-full justify-start font-normal"
              >
                <Icons.book className="mr-2 h-4 w-4" />
                Tutorial 1
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
