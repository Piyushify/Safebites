import Map from './Map'
export default function Hygienemap() {
  return (
    <section className="p-4">
      <h3 className="text-center text-[#454545aa]">
        <span className="text-xl font-safety font-bold">Your</span><span className="text-2xl font-cause font-bold"> Hygiene </span><span className="text-xl font-safety font-bold">Map</span>
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
  )
}