
const Block = ({children, style, onMouseEnter, onMouseLeave}) => {
    return (
      <div style={{
            borderRadius:"50px", 
            background: "hsla(327, 0%, 8%, .7)", 
            backdropFilter:"blur(10px) saturate(1.7)",
            ...style
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
        {children}
      </div>
    )
  }
  export default Block
  