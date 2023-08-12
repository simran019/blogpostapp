const Footer=()=>{
    const today=new Date();
    return(
        <main>
         <p> &copy; {today.getFullYear()}</p>
        </main>
    )
}
export default Footer;