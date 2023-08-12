import { useState } from "react";
const Content=()=>{
    const [name,setName] =useState("Simran");
    const [count,setCount]=useState(0);

    const handleClick=()=>{
        const names=["Simran","John","Harsh"];
        const a=names[Math.floor(Math.random()*3)]
        setName(a)
    }

    const handleClick2=()=>{
        setCount(count+1);
        setCount(count+1)
        console.log(count);
    }
    return(
        <main>
            Hello {name}
            <button onClick={handleClick}>Click ME</button>
            <button onClick={handleClick2}>Click ME</button>
        </main>
    )
}
export default Content;