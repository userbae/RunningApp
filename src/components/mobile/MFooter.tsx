import { Button } from "@/components/ui/button";

import { Home } from "lucide-react";
import { Contact } from "lucide-react";
import { ReactNode } from "react";
import { FaPersonRunning } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function MFooter() {
  return (
    <div className="absolute bottom-0 left-0 flex h-16  w-full justify-between  bg-white">
      <ButtonStyle>
        <Link to="/m">
          <Home />홈
        </Link>
      </ButtonStyle>

      <ButtonStyle>
        <Contact />
        community
      </ButtonStyle>

      <ButtonStyle>
        <Link to="/m/run">
          <FaPersonRunning />
          run
        </Link>
      </ButtonStyle>

      <ButtonStyle>
        <IoSettings />
        setting
      </ButtonStyle>
    </div>
  );
}

interface ButtonStyleProps {
  children: ReactNode;
}
export function ButtonStyle({ children }: ButtonStyleProps) {
  return <Button className="flex flex-col h-full">{children}</Button>;
}
