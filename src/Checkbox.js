import ItemList from "./Itemlist";
export default function Checkbox({items,handleChecked,handleDelete}){
    // let data=localStorage.getItem("Shopping list");
    // JSON.parse(data) 
    return(
        items.length?(
            <div className="flex flex-col  mx-auto text-3xl">
        
        <div>{items.length} {items.length?"Items":"Item"} </div>
        <ItemList items={items} handleChecked={handleChecked} handleDelete={handleDelete}/>
        </div>
        ):"No Groceries"
    )
}