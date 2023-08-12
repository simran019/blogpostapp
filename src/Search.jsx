export default function Search({search,setSearch}){
    return(
        <div>
            <input placeholder="Search Item" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
    )
}