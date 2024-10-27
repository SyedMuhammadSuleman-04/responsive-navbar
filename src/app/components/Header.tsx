import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="flex justify-between bg-blue-500">
      <div>
        <h1 className="font-bold text-4xl ring-offset-blue-900">Logo</h1>
      </div>
      <ul className="hidden md:block ">
        <li className="space-x-7 mt-2 ring-offset-blue-900">
          <Link href={"/"}>Home</Link>
          <Link href={"/Contact"}>Contact</Link>
          <Link href={"/About"}>About</Link>
        </li>
      </ul>

      <Sheet>
        <SheetTrigger>
          <Menu className="block md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="space-x-6">
              <Link href={"/"}>Home</Link>
              <Link href={"/Contact"}>Contact</Link>
              <Link href={"/About"}>About</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};
export default Header;
