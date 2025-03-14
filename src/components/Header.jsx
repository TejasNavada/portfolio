import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const Tab = ({children}) =>{
    return(
        <div style={{ marginLeft:"40px", marginRight:"40px"}}>
            {children}
        </div>
    )
}


const Header = () => {
    
    const navigate = useNavigate()
    const [page,setPage] = useState("")

    useEffect(() => {
        //console.log(window.location.pathname)
        if(window.location.pathname=="/" || window.location.pathname=="/home"){
            setPage("Home")
            console.log("Contact")
        }
        else if(window.location.pathname=="/resume"){
            setPage("Resume")
            
            console.log("Contact")
        }
        else if(window.location.pathname=="/portfolio"){
            setPage("Portfolio")
            console.log("Contact")
        }
        else if(window.location.pathname=="/contact"){
            setPage("Contact")
            console.log("Contact")
        }
        console.log(page)
      }, []);
  
    return (
      <div style={{
            zIndex:999,
            position:"fixed",
            borderRadius:"50px", 
            background: "hsla(327, 0%, 8%, .7)", 
            backdropFilter:"blur(10px) saturate(1.7)",
            marginTop:"20px",
            left:"0", 
            right:"0",
            width:"fit-content",
            marginInline:"auto"
        }} 
        className="Header">
        <nav>
            <ul style={{display:"flex", listStyleType:"none", padding:"0px", margin:"8px 0px"}}>
                {["Home","Portfolio","Resume","Contact"].map((tab)=>(
                    <li onClick={()=>navigate('/'+tab.toLowerCase())}style={{ marginLeft:"40px", marginRight:"40px", borderRadius:"50px",padding:"10px 25px", backgroundColor:page==tab?"hsla(327, 0%, 15%, .7)":"" }} >
                        {tab}
                    </li>
                ))}
            </ul>
            
        </nav>
      </div>
    )
  }
  export default Header
  