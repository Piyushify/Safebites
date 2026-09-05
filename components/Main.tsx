import Hygienemap from "./Hygienemap"
import Topplaces from "./Topplaces"
import Reviews from "./Reviews"
import Navigation from "./Navigation"

export default function Main(){
  return (
    <main className="bg-linear-to-b from-[#f6f6f6] to-[#fafafa] flex flex-col pb-20">
      <Hygienemap/>
      <Topplaces/>
      <Reviews/>
      <Navigation/>
    </main>
  )
};