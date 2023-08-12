import TrashSvg from "./assets/svgcomponents/trash";

export default function GroceryItemList({items,handleInput,handleDelete}){
    return(
        <div  className="flex flex-col p-3 border-2 border-orange-600 gap-3">
            {
                items.map((item,index)=>{
                 return(
                    <div key={item?.id} className="flex bg-gray-800 text-white text-2xl justify-between p-3 items-center">
                        <div>
                            <input 
                            type="checkbox"
                            onChange={()=>handleInput(item?.id)}
                            value={item?.isChecked} 
                            />
                        </div>
                        <div>
                            {item?.itemName}
                        </div>
                        <div className="hover:text-red-600">
                            <button onClick={()=>handleDelete(item?.id)}>
                                <TrashSvg/>
                            </button>
                        </div>
                    </div>
                 )   
                })
            }
        </div>
    )
}