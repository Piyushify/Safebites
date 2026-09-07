
import Touristicon from "./icons/Touristicon";
import Settingsicon from "./icons/Settingsicon";
import Searchicon from "./icons/Searchicon";
import Micicon from "./icons/Micicon";

export default function Header() {
  return (
    <header
      className="py-4 px-6 flex w-100% flex-col gap-2 bg-linear-135 from-[#33cc80] to-[#66ccff] rounded-t-4xl"
    >
      <div className="px-1 flex items-center gap-4">
        <div className="text-[#fafafa]">
          <h1 className="text-center text-4xl font-semibold">SafeBites</h1>
          <h2 className="-mt-1 text-center opacity-70 text-xs font-bold">
            Your Safety, Our Priority
          </h2>
        </div>
        <div className="flex grow justify-between">
          <button>
            <Touristicon className="w-6 h-6 m-1" />
          </button>
          <button>
            <Settingsicon className="w-6 h-6 fill-[#4d4d4dd7] m-1" />
          </button>
        </div>
      </div>
      <form
        className="rounded-full items-center overflow-hidden flex bg-[#fafafa] font-cause font-semibold text-[#454545aa] text-sm py-2 focus-within:border-[#33cc80]
  focus-within:ring-2 focus-within:ring-[#33cc80]/30 focus-within:-translate-y-1/25
  transition-all duration-200"
      >
        <label>
          <Searchicon className="w-5 h-5 mx-2 stroke-[#4d4d4dd7] fill-none inline" />
        </label>
        <input
          type="search"
          className="grow text-ellipsis outline-none border-none bg-transparent"
          placeholder="Search safe, hygienic food near your location"
        />
        <Micicon className="w-4.5 h-4.5 mr-2 fill-[#4d4d4dd7] stroke-none inline" />
      </form>
    </header>
  );
}
