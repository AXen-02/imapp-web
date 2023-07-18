import { Menu } from "@/components/menu";
import { Nav } from "@/components/nav";
import { NavMenu } from "@/components/nav-menu";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <label>
        {/* <NavMenu />
        <Menu />
        <Separator /> */}
        <Nav />
      </label>
    </main>
  );
}
