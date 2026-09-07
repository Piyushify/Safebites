import Map from '@/components/Map'
import { Fredoka } from "next/font/google";

const fredokaFont = Fredoka({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-svh">
      <section className={`p-4 ${fredokaFont.className}`}>
        <h3 className="text-center text-2xl font-bold text-[#454545aa]">
          Your Hygiene Map
        </h3>
        <div className="shadow-md inset-shadow-sm aspect-square relative mt-4 rounded-4xl overflow-hidden">
          <Map/>
          <div className="shadow-sm inset-shadow-sm backdrop-blur-xs *:flex *:items-center flex flex-col inline absolute top-3 right-3 rounded-3xl p-2 text-2xs font-cause font-black text-[#454545bb] *:my-1 z-99">
            <span>
              <span className="h-3 w-3 bg-[#33cc33d9] rounded-full mr-1">
              </span>
              Excellent
            </span>
            <span>
              <span className="h-3 w-3 bg-[#ffdd33d9] rounded-full mr-1">
              </span>
              Good
            </span>
            <span>
              <span className="h-3 w-3 bg-[#ff9a42d9] rounded-full mr-1">
              </span>
              Average
            </span>
          </div>
        </div>
      </section>
      <section className="text-center p-4 font-bold text-[#454545aa]">
        <h3 className="text-2xl">
          Top Places Nearby
        </h3>
        <p className="pt-4 text-3xl">COMING SOON</p>
      </section>
    </main>
  )
}
