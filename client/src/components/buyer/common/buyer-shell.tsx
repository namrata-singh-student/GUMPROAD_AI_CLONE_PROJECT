import { ReactNode } from "react";
import BuyerNavbar from "./navbar";
import { getMe } from "@/lib/auth/getMe";

export default async function BuyerSell({ children }: { children: ReactNode }) {
  const me = await getMe();

  return (
    <div className="min-h-screen bg-[#f5f5f2] text-black">
      <BuyerNavbar isUserLoggedIn={me?.ok} />
      {children}
    </div>
  );
}
