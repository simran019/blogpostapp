import AddItemSvg from "./assets/svgcomponents/add";

export default function AddItem({handleAddItem,addItem}){
    return(
        <div className="flex p-1 border-orange-600 border-2 items-center w-full gap-1">
            <div className="p-3 w-full">
                <input
                placeholder="Add Item"
                className="border-2 border-black w-full p-3 rounded-xl"
                onChange={(e)=>addItem(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleAddItem}>
                <AddItemSvg/>
                </button>
            </div>
           
        </div>
    )
}


















// import { useState } from "react";
// import AddItemSvg from "./assets/svgcomponents/add";
// import { useRef } from "react";
// export default function AddItem({newItem,setNewItem,handleSubmit}){
//    const inputRef=useRef("");

//     return(
//         <div  className="w-72 bg-green-100 p-2">
//             <form onSubmit={handleSubmit}>
//                 <input
//                 autoFocus
//                 ref={inputRef}
//                 className="border-2 rounded-xl p-2 border-black mr-3"
//                 placeholder="Add Item"
//                 value={newItem}
//                 onChange={(e)=>{setNewItem(e.target.value)}}            
//                 required
//                 />
//                 <button type="submit" className="mt-3 hover:bg-pink-500" 
//                 onClick={()=>inputRef.current.focus()}>
//                     <AddItemSvg/>
//                 </button>
//             </form>
//         </div>
//     )
// }