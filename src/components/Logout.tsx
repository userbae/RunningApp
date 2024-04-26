import { getAuth, signOut } from "firebase/auth";
import { ReactNode } from "react";

interface LogoutProps {
  children: ReactNode;
}

export default function Logout({ children }: LogoutProps) {
  const auth = getAuth();

  const onLogOutClick = async () => {
    await signOut(auth);
  };
  return (
    <button onClick={onLogOutClick} className="flex items-center">
      {children}
    </button>
  );
}
