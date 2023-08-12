const apiRequest=async(url="",options={},errorMsg='')=>{
 try{
    const response=await fetch(url,options);
    if(!response.ok) throw Error("Please reload app")
    return response
   }
 catch(err){
    console.log(err)
 }
}
export default apiRequest