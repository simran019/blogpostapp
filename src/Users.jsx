import { useState } from "react"
import AddItemSvg from "./assets/svgcomponents/add";
import TrashSvg from "./assets/svgcomponents/trash";

export default function Users({items2,setItems2,handleChecked2,handleDelete2,user,setUser,handleInput,handleSubmit2}){
    
    
    return(
        <div className="bg-green-300">
            <form onSubmit={handleSubmit2}>
                <input name="name" placeholder="Name" className="border-2 border-black" 
                onChange={handleInput} />
                <input name="emailId" placeholder="Email Id" className="border-2 border-black"
                 onChange={handleInput}/>
                <button type="submit">
                    <AddItemSvg/>
                </button>
            </form>
            {
                items2.length?(
                items2.map((item,index)=>{
                    return(
                        <div className="flex gap-5">
                            <div>
                                <input type="checkbox" onChange={()=>{handleChecked2(item.id)}}/>
                            </div>
                            <div className={item.checked?'line-through':null}>{item.name}</div>
                            <div>{item.emailId}</div>
                            <button
                             onClick={()=>{handleDelete2(item.id)}}
                             className="hover:text-red-400">
                                <TrashSvg/>
                             </button>
                            
                        </div>
                    )
                })
                ):"No users"
            }
             <div>{items2.length} {items2.length?"items":"item"} in cart</div>
        </div>
    )
}