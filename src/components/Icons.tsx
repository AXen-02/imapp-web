import { LucideProps } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { RxComponentBoolean } from "react-icons/rx";
import {
  LuHammer,
  LuBookOpen,
  LuBook,
  LuBookPlus,
  LuPanelLeftOpen,
  LuPanelLeftClose,
  LuDownload,
  LuSettings2,
  LuBot,
} from "react-icons/lu";

export const Icons = {
  book: (props: React.HTMLAttributes<SVGElement>) => {
    return <LuBook {...props} />;
  },
  bookOpen: (props: React.HTMLAttributes<SVGElement>) => {
    return <LuBookOpen {...props} />;
  },
  bookPlus: (props: React.HTMLAttributes<SVGElement>) => {
    return <LuBookPlus {...props} />;
  },
  download: (props: React.HTMLAttributes<SVGElement>) => {
    return <LuDownload {...props} />;
  },
  logo: (props: React.HTMLAttributes<SVGElement>) => {
    return <RxComponentBoolean {...props} />;
  },
  navMenuOpen: (props: React.HTMLAttributes<SVGElement>) => {
    return <LuPanelLeftOpen {...props} />;
  },
  logo2: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m10 10-2 2 2 2" />
      <path d="m14 14 2-2-2-2" />
      <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
    </svg>
  ),
  google: (props: React.HTMLAttributes<SVGElement>) => {
    return <FcGoogle {...props} />;
  },
  settings: (props: React.HTMLAttributes<SVGElement>) => {
    return <LuSettings2 {...props} />;
  },
  troubleshooter: (props: React.HTMLAttributes<SVGElement>) => {
    return <LuBot {...props} />;
  },
};
