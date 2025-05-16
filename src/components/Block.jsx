import React, {  useState } from "react";
const Block = ({children, style, hover}) => {

  const [hovered,setHovered] = useState(false)
    return (
      <div style={{
            borderRadius:"50px", 
            background: "hsla(327, 0%, 8%, .7)", 
            backdropFilter:"blur(10px) saturate(1.7)",
            transform: hover==true && hovered ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.3s ease-in-out',
            ...style
        }}
        onMouseEnter={()=>{
          console.log("entered")
          setHovered(true)}}
        onMouseLeave={()=>setHovered(false)}
        >
        {children}
      </div>
    )
  }
  export default Block
  