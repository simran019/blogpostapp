import TrashSvg from "./assets/svgcomponents/trash";
export default function ItemList({items,handleChecked,handleDelete}){
    return(
        
        items.map((item,index)=>{
            return(
                <div className="flex bg-gray-300 w-full  justify-between gap-3 p-3" key={index}>
                    <div>
                        <input
                         type="checkbox"
                         checked={item?.isChecked}
                         onChange={()=>{handleChecked(item.id)}}
                         />
                    </div>
                    <div
                    onDoubleClick={()=>handleChecked(item.id)}
                    className={item.isChecked?'line-through':null}
                    >{item.itemName}</div>
                    <button className="hover:text-red-400" onClick={()=>handleDelete(item.id)}><TrashSvg/></button>
                </div>
            )
        })
    )
}