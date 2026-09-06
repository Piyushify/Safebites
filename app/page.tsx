import { Fredoka } from "next/font/google";

const fredokaFont = Fredoka({
  subsets: ["latin"],
});

import Header from "@/components/Header";
import Main from "@/components/Main";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <div className={`p-4 ${fredokaFont.className}`}>
      <Header />
      <Main />
      <BottomNav />
    </div>
  );
}
