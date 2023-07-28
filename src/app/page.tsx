import { Nav } from "@/components/Nav";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start">
      <label>
        {/* <NavMenu />
        <Menu />
         */}
        <Nav />
        <Separator />
      </label>
    </main>
  );
}
