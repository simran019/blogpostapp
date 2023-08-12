export default function Cart({cart,total}){
    return(
        <div className="w-1/2">
                <div className="bg-orange-600 p-3 text-white text-3xl font-semibold text-center ">
                Cart
                </div>
                <div className="flex flex-col gap-3 p-3 border-2 border-orange-600">
                {
                    cart?.map((item,index)=>{
                        return(
                            <div key={item?.id} className="flex text-white text-3xl bg-gray-800 justify-between p-3">
                                <div>{item?.itemName}</div>
                                <div>{item?.price}</div>
                            </div>
                        )
                    })
                }
            <div>{total==0?<p className="text-center text-red-800 text-3xl font-semibold">No Item in cart</p>:"Total:"+total}</div>
                </div>

            </div>
           
    )
}