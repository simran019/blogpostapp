// import { useEffect, useState } from 'react';
// import './App.css';
// import Header from './Header';
// import Content from './Content';
// import Footer from './Footer';
// import Checkbox from './Checkbox';
// import Users from './Users';
// import AddItem from './AddItem';
// import Logindetails from './Logindetails';
// import Search from './Search';
// function App() {
//     const [search,setSearch]=useState("");
//     const arr4=[
//         {
//             id:1,
//             username:"simran@gmail.com",
//             password:123
//         },{
//             id:2,
//             username:"angad@gmail.com",
//             password:456
//         },{
//             id:3,
//             username:"sara@gmail.com",
//             password:909
//         }
//     ]
//     const [userLoginDetails,setUserLoginDetails]=useState(arr4);
//     const arr=[
//     {
//         id:1,
//         itemName:"Mango",
//         isChecked:false,
//     },{
//         id:2,
//         itemName:"Apple",
//         isChecked:false,
//     },{
//         id:3,
//         itemName:"Litchi",
//         isChecked:false,
//     }
//    ]
//    const arr2=[
//     {
//         id:1,
//         name:"Simran",
//         emailId:"simran@gmail.com"
//         ,checked:false
//     },{
//         id:2,
//         name:"Angad",
//         emailId:"angad@gmail.com"
//         ,checked:false
//     },{
//         id:3,
//         name:"Sara",
//         emailId:"sara@gmail.com"
//         ,checked:false
//     }
// ]



// const [items2,setItems2]=useState(arr2);
// const handleChecked2=(id)=>{
//     const users=items2.map((item,index)=>{
//         return item.id==id?{...item,checked:!item.checked}:item
//     })
//     setItems2(users);
// }
// const handleDelete2=(id)=>{
//     console.log(id)
// const users=items2.filter((item,index)=>{
//         return(
//             item.id!==id
//         )
//     })
//    setItems2(users) 
// }
//    const [items,setItems]=useState([]);
//    const[fetchError,setFetchError]=useState(null);

//   const fetchItems=async()=>{
//     try{
//         const response=await fetch("http://localhost:3500/items");
//         if(!response.ok) throw Error("Error occured");
//         const resp=await response.json()
//         setFetchError(null);
//         setItems(resp)
//     }
//     catch(err)
//     {
//         setFetchError(err)
//     }
//   }
//    useEffect(()=>{
//     fetchItems()
//   },[])
//    const [newItem,setNewItem]=useState('');
  
//    const [user,setUser]=useState({
//     id:0,
//     name:"",
//     emailId:"",
//     checked:false
//   })

// const addItem=(item)=>{
//   const id=items.length?items[items.length-1].id +1:1
//   const myNewItem={id,itemName:item,isChecked:false}
//   setNewItem("")
//   console.log(myNewItem)
//   const listItems=[...items,myNewItem]
//    setItems(listItems)
// }

//    const handleSubmit=(e)=>{
//     e.preventDefault()
//     addItem(newItem)
//    }

//    const handleChecked=(id)=>{
//     const listItems= items.map((item,index)=>{
//          return(
//              item.id===id ? {...item,isChecked:!item.isChecked} :item
//          )
//      })
//      setItems(listItems);
//      localStorage.setItem("Shopping list",JSON.stringify(listItems));
//  }
//  const handleDelete=(id)=>{
//      const listItems=items.filter((item)=>item.id!== id )
//      setItems(listItems)
//      localStorage.setItem("Shopping list",JSON.stringify(listItems))
//  }
//  const handleInput=(e)=>{
//     // console.log(e.target.name)
//     const id=items2.length?items2[items2.length-1].id+1:1
//     setUser({...user,id,[e.target.name]:e.target.value,checked:false})
   
// }
// const handleSubmit2=(e)=>{
//     e.preventDefault();
//     setItems2([...items2,user])
//     console.log("working",items2)
// }
// const [newUser,setNewUser]=useState({
//     id:"",
//     username:"",
//     password:""
// })
// const handleInput2=(e)=>{
//     const id=userLoginDetails.length?userLoginDetails[userLoginDetails.length-1].id+1:1;
//     setNewUser({
//     ...newUser,
//     id,
//     [e.target.name]:e.target.value
//     })
//     console.log(newUser);
// }
// // console.log("Begore useeffect")
// // useEffect(()=>{
// //    // setItems(JSON.parse(localStorage.getItem("Shopping list")))
// // },[])
// // console.log("after useeffect")
// const handleSubmitUser=(e)=>{
//     console.log("hello ")
//     e.preventDefault();
//     setUserLoginDetails([
//         ...userLoginDetails,
//         newUser
//     ])
//     console.log(userLoginDetails)
// }
//   return (
//     // <div className="flex flex-col gap-5 w-1/3 items-center border-black border-2">
//       <div className='flex flex-col w-1/2 mx-auto items-center'>
//         <Header/>
//       {/* <Content/> */}
//       <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
//       <Search search={search} setSearch={setSearch}/>
//       {fetchError && <p>{`error : ${fetchError}`}</p>}
//       <Checkbox items={items.filter((item)=>(item.itemName.toLowerCase()).includes(search.toLowerCase()))} handleChecked={handleChecked} handleDelete={handleDelete}/>
//       {/* <Users items2={items2} setItems2={setItems2} user={user} setUser={setUser} handleChecked2={handleChecked2} handleDelete2={handleDelete2} handleInput={handleInput} handleSubmit2={handleSubmit2} />       */}
//         {/* <Logindetails userLoginDetails={userLoginDetails} handleInput2={handleInput2} handleSubmitUser={handleSubmitUser}/> */}
//       {/* <Footer/> */}
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import Grocery from "./Grocery";
import Cart from "./Cart";
import apiRequest from "./apiReq";
import Tabs from "./Tabs";

export default function App(){
    const [items,setItems]=useState([]);
    const [cart,setCart]=useState([]);

    const fetchItems=async()=>{
    //  console.log("getting called")
        try{
            let response=await fetch("http://localhost:3500/items");
            let resp=await response.json();
            setItems(resp);
        }
        catch(err){
            console.log(err)
        }
    }
    const [total,setTotal]=useState(0);
    const addToCart=(listItems)=>{
        listItems.map((item)=>{
                setCart([...cart,item])
                let pr=item?.price +total
                setTotal(pr)
            
        })
        
    }
    useEffect(()=>{
        console.log(cart,"cart")
    },[cart])
    const handleInput=async(id)=>{
        console.log("callde")
        const listItem=items?.filter((item,index)=>{
            return(
                item.id===id)
        })
        console.log({...listItem[0],isChecked:!listItem[0].isChecked});
        const postOptions={
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({isChecked:!listItem[0].isChecked})
        }
        const reqUrl=`http://localhost:3500/items/${listItem[0].id}`
        const response =await fetch(reqUrl,postOptions);
        if(response){
            console.log("checked updated in database",response);
            fetchItems()
        }
    }
    useEffect(()=>{
        fetchItems()
    },[])
    const [search,setSearch]=useState("");
    const handleDelete=async(id)=>{
        const listItem=items.filter((item)=>item.id!==id);
        setItems(
            listItem
        )

        const deleteOptions={
            method:'DELETE',
        }
        const reqUrl=`http://localhost:3500/items/${id}`
        const response=await fetch(reqUrl,deleteOptions);
        if(response)
        {
            console.log("deleted")
        }
    }
    // const [addItem,setAddItem]=useState({
    //     id:"",
    //     itemName:"",
    //     isChecked:false
    // });
   const[item,addItem]=useState("");

    const handleAddItem=async()=>{
        const id=items?items[items.length-1].id+1:1
        const newItem={
            id,
            itemName:item,
            isChecked:false,
            price:0
        }
        console.log(newItem)
        const postOptions={
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newItem)
        }
        const response=await apiRequest("http://localhost:3500/items",postOptions);
        if(response){
            fetchItems()
        }
    }
    const [requestType,setRequestType]=useState("users");
    const [requestData,setRequestData]=useState([]);
    useEffect(()=>{
        handleRequestType("users")
    },[])
    const handleRequestType=async(type)=>{
        // e.preventDefault()
        const reqtype=type
        setRequestType(reqtype)
        const response=await fetch(`https://jsonplaceholder.typicode.com/${reqtype}`)
        const resp=await response.json();
        console.log(resp)
        setRequestData(resp)
        
    }
   
    return(
        <div className="flex flex-col gap-5 w-full h-screen items-center p-3">
            <Grocery 
            // items={items}
            items={items?.filter((item)=>(item.itemName.toLowerCase()).includes(search.toLowerCase()))} 
            handleInput={handleInput} 
            search={search}
            setSearch={setSearch}
            handleDelete={handleDelete} 
            handleAddItem={handleAddItem}
            addItem={addItem}
            // setAddItem={setAddItem}
             />
             
            <Cart cart={cart} total={total}/>
            <Tabs 
            requestType={requestType}
             setRequestType={setRequestType} 
             handleRequestType={handleRequestType} 
             requestData={requestData}/>
        </div>
    )
}