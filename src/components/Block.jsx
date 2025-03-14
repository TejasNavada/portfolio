
const Block = ({children, style}) => {
    return (
      <div style={{
            borderRadius:"50px", 
            background: "hsla(327, 0%, 8%, .7)", 
            backdropFilter:"blur(10px) saturate(1.7)",
            ...style
        }} 
        >
        {children}
      </div>
    )
  }
  export default Block
  