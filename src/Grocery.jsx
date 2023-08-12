import AddItem from "./AddItem";
import GroceryItemList from "./GroceryItemList";
import SearchGroceryItem from "./SearchGroceryItem";
export default function Grocery({items,handleInput,search,setSearch,handleDelete,handleAddItem,addItem}){
    return(
        
            <div className="w-1/2  p-3">
                <div className="bg-orange-600 p-3 text-white text-3xl font-semibold text-center ">
                Groceries List
                </div>
                <div>
                    <SearchGroceryItem search={search} setSearch={setSearch}/>
                    <AddItem handleAddItem={handleAddItem} addItem={addItem}/>
                </div>
                <div>
                    <GroceryItemList items={items} handleInput={handleInput} handleDelete={handleDelete}/>
                </div>
            </div>
      
    )
}