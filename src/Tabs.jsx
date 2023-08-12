export default function Tabs({requestType,handleRequestType,setRequestType,requestData}){
   const keysdata= requestData[0]
   const keys=[];
   for( var i in keysdata){
    keys.push(i);
    }    
    
    return(

        <div className="border-2 border-orange-600 w-full">
            
            <div className="flex gap-2 bg-green-600 justify-between text-center">
                <div>
                    <button className="w-full p-2 text-3xl focus:bg-gray-800 focus:text-white" onClick={()=>handleRequestType("users")}>
                        Users
                    </button>
                </div>
                <div>
                    <button className="w-full p-2 text-3xl focus:bg-gray-800 focus:text-white" onClick={()=>handleRequestType("posts")}>
                    Posts
                    </button>
                </div>
                <div>
                    <button className="w-full p-2 text-3xl focus:bg-gray-800 focus:text-white" onClick={()=>handleRequestType("comments")}>
                    Comments
                    </button>
                </div>
            </div>
            <table className="table-auto">
                <thead>
                <tr className="">
                    {
                        keys.map((item)=>{
                            return <th className="">{item}</th>
                        })
                    }
                </tr>
                </thead>
        <tbody>
                {
                    requestData?.map((item)=>{
                        return(
                            <tr className="border-2 border-black">
                                <td>{item?.id}</td>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.title}</td>
                                <td>{item?.phone}</td>
                                <td>{item?.website}</td>
                                <td>{item?.username}</td>
                              <td>{item?.body}</td>
                                <td>{JSON.stringify(item?.company)}</td>
                                <td>{JSON.stringify(item?.address)}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}