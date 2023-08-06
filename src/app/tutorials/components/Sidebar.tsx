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
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <Icons.bookOpen className="mr-2 h-4 w-4" />
              Recent
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Icons.browse className="mr-2 h-4 w-4" />
              Browse
            </Button>
            {/* For Instructor 
            <Button variant="ghost" className="w-full justify-start">
              <Icons.bookPlus className="mr-2 h-4 w-4" />
              New tutorial
            </Button> */}
          </div>
        </div>
        {/* USER TUTORIALS */}
        <div className="px-3 py-2">
          <h2 className="relative mb-2 px-4 text-lg font-semibold tracking-tight">
            My Tutorials
          </h2>
          <ScrollArea className="h-[500px]">
            <div className="p-2">
              {/* Map user tutorials here */}
              <Button
                // key={`${playlist}-${i}`}
                variant="ghost"
                className="w-full justify-start font-normal"
              >
                <Icons.book className="mr-2 h-4 w-4" />
                Tutorial 1
              </Button>
              <Button
                // key={`${playlist}-${i}`}
                variant="ghost"
                className="w-full justify-start font-normal"
              >
                <Icons.book className="mr-2 h-4 w-4" />
                Tutorial 1
              </Button>
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
