import AddItemSvg from "./assets/svgcomponents/add";

export default function Logindetails({userLoginDetails,handleInput2,handleSubmitUser}){
 
    return(
        <>
        <form onSubmit={handleSubmitUser}>
            <div>
                <input name="username" placeholder="Enter Username" onChange={handleInput2}/>
            </div>
            <div>
                <input name="password" placeholder="Enter Password" onChange={handleInput2}/>
            </div>
            <button type="submit">
                <AddItemSvg/>
            </button>
        </form>
        <div>
            {
                userLoginDetails?.map((item,index)=>{
                    return(
                        <div key={item.id} className="flex gap-3">
                            
                        <div>{item.username}</div>
                        <div>{item.password}</div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}