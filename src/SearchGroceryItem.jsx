import AddItemSvg from "./assets/svgcomponents/add";

export default function SearchGroceryItem({search,setSearch}){
    return(
        <div className="flex p-3 gap-2 border-2 border-orange-600">
            <div className="w-full">
            <input 
            className="border-2 border-black w-full p-2 rounded-xl"
            placeholder="Search Item"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
            </div>
            {/* <div>
            <AddItemSvg/>
            </div>             */}
        </div>
    )
}